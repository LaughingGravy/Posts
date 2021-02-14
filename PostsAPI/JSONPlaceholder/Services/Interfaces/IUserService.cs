using System.Collections.Generic;
using System.Threading.Tasks;
using PostsAPI.JSONPlaceholder.Models;

namespace PostsAPI.JSONPlaceholder.Services.Interfaces
{
    public interface IUserService
    {         
        Task<IEnumerable<User>> GetUsersAsync();
    }
}