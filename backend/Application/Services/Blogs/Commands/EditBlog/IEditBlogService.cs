using Common.Dto;

namespace Application.Services.Blogs.Commands.EditBlog
{
    public interface IEditBlogService
    {
        ResultDto Execute(RequestEditBlogDto request);

    }
}
