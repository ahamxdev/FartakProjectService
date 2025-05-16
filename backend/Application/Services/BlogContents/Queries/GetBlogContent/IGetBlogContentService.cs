namespace Application.Services.BlogContents.Queries.GetBlogContent
{
    public interface IGetBlogContentService
    {
        ResultGetBlogContentDto GetById(RequestGetBlogContentByIdDto request);
        ResultGetBlogContentDto GetByBlogId(RequestGetBlogContentByBlogIdDto request);
        ResultGetBlogContentDto GetAll();
    }
}
