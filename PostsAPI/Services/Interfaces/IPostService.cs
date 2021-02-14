using System.Collections.Generic;
using System.Threading.Tasks;
using PostsAPI.Models;

namespace PostsAPI.Services.Interfaces
{
    public interface IPostService
    {
        Task<IEnumerable<Post>> GetPostsAsync();
    }
}