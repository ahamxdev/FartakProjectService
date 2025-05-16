using Common.Dto;

namespace Application.Services.BlogContents.Commands.EditBlogContent
{
    public interface IEditBlogContentService
    {
        ResultDto Execute(RequestEditBlogContentDto request);
    }
}
