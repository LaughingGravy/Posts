namespace PostsAPI.JSONPlaceholder.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set ; }

        public string Email { get; set; }

        public Address Address {get; set; }

        public Geo Geo {get; set; }

        public string Phone { get; set; }

        public string Website{ get; set; }

        public Company Company { get; set; }
    }
}