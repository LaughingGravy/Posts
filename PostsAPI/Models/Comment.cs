namespace PostsAPI.Models
{
    public class Comment
    {
        public int PostId { get; set;}

        public int Id { get; set;}

        public string Name {get; set;}

        public string Body {get; set;}
    }
}