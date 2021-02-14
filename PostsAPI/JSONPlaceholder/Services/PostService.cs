using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PostsAPI.JSONPlaceholder.Models;
using PostsAPI.JSONPlaceholder.Services.Interfaces;

namespace PostsAPI.JSONPlaceholder.Services
{
    public class PostService : IPostService
    {
        private readonly HttpClient httpClient;
        
        public PostService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }
    
        public async Task<IEnumerable<Post>> GetPostsAsync()
        {
            var response = await httpClient.GetAsync("/posts");

            response.EnsureSuccessStatusCode();
            
            string jsonResponse = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<List<Post>>(jsonResponse);
        }
    }
}