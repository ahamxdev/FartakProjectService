namespace Application.Services.Blogs.Queries.GetBlog
{
    public class ResultGetBlogDto
    {
        public required List<GetBlogDto> Blogs { get; set; }
        public long Rows { get; set; }
    }
}
