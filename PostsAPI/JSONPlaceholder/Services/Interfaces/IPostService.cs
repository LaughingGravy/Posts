using System.Collections.Generic;
using System.Threading.Tasks;
using PostsAPI.JSONPlaceholder.Models;

namespace PostsAPI.JSONPlaceholder.Services.Interfaces
{
    public interface IPostService
    {        
        Task<IEnumerable<Post>> GetPostsAsync();
    }
}