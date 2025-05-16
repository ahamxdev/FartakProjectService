using Common.Dto;

namespace Application.Services.BlogContents.Commands.RemoveBlogContent
{
    public interface IRemoveBlogContentService
    {
        ResultDto Delete(RequestRemoveBlogContentDto request);
        ResultDto DeleteByBlogId(RequestRemoveBlogContentByBlogIdDto request);
    }
}
