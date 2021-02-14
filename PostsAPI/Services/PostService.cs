using System.Collections.Generic;
using System.Threading.Tasks;
using PostsAPI.Models;
using PlaceholderInterfaces = PostsAPI.JSONPlaceholder.Services.Interfaces;
using PlaceholderModels = PostsAPI.JSONPlaceholder.Models;
using System.Linq;

namespace PostsAPI.Services.Interfaces
{
    public class PostService : IPostService
    {
        private readonly PlaceholderInterfaces.IPostService postService;
        private readonly PlaceholderInterfaces.ICommentService commentService;
        private readonly PlaceholderInterfaces.IUserService userService;

        public PostService(PlaceholderInterfaces.IPostService postService,
                            PlaceholderInterfaces.ICommentService commentService,
                            PlaceholderInterfaces.IUserService userService)
        {
            this.postService = postService;
            this.commentService = commentService;
            this.userService = userService;
        }

        public async Task<IEnumerable<Post>> GetPostsAsync()
        {
            IEnumerable<PlaceholderModels.Post> sourcePosts = await this.postService.GetPostsAsync();

            IEnumerable<PlaceholderModels.User> sourceUsers = await this.userService.GetUsersAsync();

            IEnumerable<PlaceholderModels.Comment> sourceComments = await this.commentService.GetCommentsAsync();

            IEnumerable<Poster> posters = sourceUsers.Select(user => new Poster(){
                UserId = user.Id,
                Username = user.Username
            });

            IEnumerable<Comment> comments = sourceComments.Select(comment => new Comment(){
                Id = comment.Id,
                PostId = comment.PostId,
                Name = comment.Name,
                Body = comment.Body
            });

            IEnumerable<Post> postsToReturn = sourcePosts.Select(post => new Post() {
                Id = post.Id,
                Poster = posters.FirstOrDefault(poster => poster.UserId == post.UserId),
                Title = post.Title,
                Body = post.Body,
                Comments = comments.Where(c => c.PostId == post.Id)
            });

            return postsToReturn.ToList();
        }
    }
}