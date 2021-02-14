using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PostsAPI.JSONPlaceholder.Models;
using PostsAPI.JSONPlaceholder.Services.Interfaces;

namespace PostsAPI.JSONPlaceholder.Services
{
    public class UserService : IUserService
    {
        private readonly HttpClient httpClient;

        public UserService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            var response = await httpClient.GetAsync("/users");

            response.EnsureSuccessStatusCode();

            string jsonResponse = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<List<User>>(jsonResponse);
        }
    }
}