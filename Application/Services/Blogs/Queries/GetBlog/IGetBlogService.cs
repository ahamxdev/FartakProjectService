namespace Application.Services.Blogs.Queries.GetBlog
{
    public interface IGetBlogService
    {
        ResultGetBlogDto GetById(RequestGetBlogByIdDto request);
        ResultGetBlogDto GetAll();
    }
}
