namespace Application.Services.BlogContents.Queries.GetBlogContent
{
    public class ResultGetBlogContentDto
    {
        public required List<GetBlogContentDto> BlogContents { get; set; }
        public long Rows { get; set; }
    }
}
