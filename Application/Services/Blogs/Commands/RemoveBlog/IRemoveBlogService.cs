using Common.Dto;

namespace Application.Services.Blogs.Commands.RemoveBlog
{
    public interface IRemoveBlogService
    {
        ResultDto Delete(RequestRemoveBlogDto request);
    }
}
