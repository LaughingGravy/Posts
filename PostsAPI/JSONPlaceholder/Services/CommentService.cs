using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PostsAPI.JSONPlaceholder.Models;
using PostsAPI.JSONPlaceholder.Services.Interfaces;

namespace PostsAPI.JSONPlaceholder.Services
{
    public class CommentService : ICommentService
    {
        private readonly HttpClient httpClient;

        public CommentService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }

        public async Task<IEnumerable<Comment>> GetCommentsAsync()
        {
            var response = await httpClient.GetAsync("/comments");

            response.EnsureSuccessStatusCode();

            string jsonResponse = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<List<Comment>>(jsonResponse);
        }
    }
}
