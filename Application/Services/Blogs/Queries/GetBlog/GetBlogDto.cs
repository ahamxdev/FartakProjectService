using Application.Services.BlogContents.Queries.GetBlogContent;

namespace Application.Services.Blogs.Queries.GetBlog
{
    public class GetBlogDto
    {
        public long BlogId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string CreatedDate { get; set; }
        public required string CreatedTime { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }
        public required string Image { get; set; }
        public required List<GetBlogContentDto> BlogContents { get; set; }
    }
}
