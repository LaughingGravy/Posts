namespace PostsAPI.Models
{
    public class PagingMetadata
    {
        public int TotalCount { get; set; }
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public string HasPreviousPage { get; set; }
        public string HasNextPage { get; set; }
        public bool IsOrderByLatest { get; set; }
    }
}