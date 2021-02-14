using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using PostsAPI.Models;
using PostsAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostsAPI.Controllers
{
    [AllowAnonymous]
    [Route ("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PostsController : ControllerBase
    {
        private readonly IMemoryCache cache;
        private readonly IPostService postService;

        private readonly IConfiguration config;

        public PostsController(IPostService postService, IMemoryCache memoryCache, IConfiguration config)
        {
            this.postService = postService;
            this.cache = memoryCache;
            this.config = config;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PagingParams pagingParams)
        {
            IEnumerable<Post> postsToReturn = Enumerable.Empty<Post>();

            var posts = await GetPosts();

            int countOfPosts = posts.Count();

            var pagingMetadata = GetPagingMetadata(pagingParams, countOfPosts);

            if (pagingParams.IsOrderByLatest) {
                postsToReturn = posts.OrderByDescending(p => p.Id).Skip((pagingMetadata.CurrentPage - 1) * pagingMetadata.PageSize).Take(pagingMetadata.PageSize).ToList(); 
            } 
            else
            {
                postsToReturn = posts.OrderBy(p => p.Id).Skip((pagingMetadata.CurrentPage - 1) * pagingMetadata.PageSize).Take(pagingMetadata.PageSize).ToList(); 
            } 

            string pagingHeaderKey = config.GetSection("AppSettings:PagingHeaders").Value;

            Response.Headers.Add("Access-Control-Expose-Headers", pagingHeaderKey);
            
            Response.Headers.Add(pagingHeaderKey, JsonConvert.SerializeObject(pagingMetadata));

            return Ok(postsToReturn);
        }

        private async Task<IEnumerable<Post>> GetPosts()
        {
            IEnumerable<Post> posts = Enumerable.Empty<Post>();

            if (!cache.TryGetValue("Posts", out posts))
            {
                posts = await this.postService.GetPostsAsync();

                MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(60)
                };
 
                cache.Set("Posts", posts, options);
            }

            return posts;
        }

        private PagingMetadata GetPagingMetadata(PagingParams pagingParams, int countOfPosts)
        {
            int currentPage = pagingParams.PageNumber; 

            int pageSize = pagingParams.PageSize;

            int totalPages = (int)Math.Ceiling(countOfPosts / (double)pageSize);  

            var hasPreviousPage = currentPage > 1 ? "True" : "False";
            
            var hasNextPage = currentPage < totalPages ? "True" : "False";  

            return new PagingMetadata()  
            {  
                TotalCount = countOfPosts,  
                PageSize = pageSize,  
                CurrentPage = currentPage,  
                TotalPages = totalPages,  
                IsOrderByLatest = pagingParams.IsOrderByLatest,
                HasPreviousPage = hasPreviousPage,  
                HasNextPage = hasNextPage
            };
        }
    }
}