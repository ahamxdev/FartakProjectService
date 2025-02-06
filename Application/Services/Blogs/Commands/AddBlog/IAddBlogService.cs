using Common.Dto;

namespace Application.Services.Blogs.Commands.AddBlog
{
    public interface IAddBlogService
    {
        ResultDto<ResultAddBlogDto> Execute(RequestUploadAddBlogDto request);
    }
}
