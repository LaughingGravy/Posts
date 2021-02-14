using System.Collections.Generic;

namespace PostsAPI.Models
{
    public class Post
    {
        public Poster Poster { get; set;}

        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public IEnumerable<Comment> Comments { get; set; }
    }
}