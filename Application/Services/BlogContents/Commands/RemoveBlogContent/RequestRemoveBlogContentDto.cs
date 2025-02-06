namespace Application.Services.BlogContents.Commands.RemoveBlogContent
{
    public class RequestRemoveBlogContentDto
    {
        public long BlogContentId { get; set; }
    }

    public class RequestRemoveBlogContentByBlogIdDto
    {
        public long BlogId { get; set; }
    }
}
