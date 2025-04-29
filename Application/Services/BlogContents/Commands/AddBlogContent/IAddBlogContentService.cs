using Common.Dto;

namespace Application.Services.BlogContents.Commands.AddBlogContent
{
    public interface IAddBlogContentService
    {
        ResultDto<ResultAddBlogContentDto> Execute(RequestUploadAddBlogContentDto request);
    }
}
