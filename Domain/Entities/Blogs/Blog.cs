namespace Domain.Entities.Blogs
{
    public class Blog
    {

        public long BlogId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string CreatedDate { get; set; }
        public required string CreatedTime { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }
        public required string Image { get; set; }

    }
}
