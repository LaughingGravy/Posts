namespace PostsAPI.Models
{
    public class PagingParams
    {  
        const int MaxPageSize = 20; 
        private int pageSize  = 10; 
  
        public int PageNumber { get; set; } = 1;  

        public bool IsOrderByLatest { get; set; } = true;
  
        public int PageSize  
        {  
            get 
            { 
                return pageSize; 
            }  
            set  
            {  
                pageSize = (value > MaxPageSize) ? MaxPageSize : value;  
            }  
        }  
    }  

}