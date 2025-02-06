using Application.Interfaces.Contexts;
using Application.Services.BlogContents.Queries.GetBlogContent;

namespace Application.Services.Blogs.Queries.GetBlog
{
    public class GetBlogService : IGetBlogService
    {

        private readonly IDatabaseContext _context;
        private readonly IGetBlogContentService _getBlogContentService;

        public GetBlogService(IDatabaseContext context, IGetBlogContentService getBlogContentService)
        {
            _context = context;
            _getBlogContentService = getBlogContentService;


        }


        public ResultGetBlogDto GetById(RequestGetBlogByIdDto request)
        {
            var blogs = _context.Blogs.Where(x => x.BlogId == request.BlogId);

            var blogResult = new List<GetBlogDto>();

            foreach (var item in blogs)
            {
                var blogContent = _getBlogContentService.GetByBlogId(new RequestGetBlogContentByBlogIdDto
                {
                    BlogId = item.BlogId,
                }).BlogContents;

                blogResult.Add(new GetBlogDto
                {
                    CreatedDate = item.CreatedDate,
                    CreatedTime = item.CreatedTime,
                    Description = item.Description,
                    Image = item.Image,
                    Title = item.Title,
                    UpdateDate = item.UpdateDate,
                    UpdateTime = item.UpdateTime,
                    BlogId = item.BlogId,
                    BlogContents = blogContent
                });
            }
            return new ResultGetBlogDto()
            {

                Blogs = blogResult.OrderBy(b => b.BlogId).ToList(),
                Rows = blogResult.Count,

            };
        }


        public ResultGetBlogDto GetAll()
        {
            var blogs = _context.Blogs;
            var blogResult = new List<GetBlogDto>();

            foreach (var item in blogs)
            {
                var blogContent = _getBlogContentService.GetByBlogId(new RequestGetBlogContentByBlogIdDto
                {
                    BlogId = item.BlogId,
                }).BlogContents;

                blogResult.Add(new GetBlogDto
                {
                    CreatedDate = item.CreatedDate,
                    CreatedTime = item.CreatedTime,
                    Description = item.Description,
                    Image = item.Image,
                    Title = item.Title,
                    UpdateDate = item.UpdateDate,
                    UpdateTime = item.UpdateTime,
                    BlogId = item.BlogId,
                    BlogContents = blogContent
                });
            }
            return new ResultGetBlogDto()
            {

                Blogs = blogResult.OrderBy(b => b.BlogId).ToList(),
                Rows = blogResult.Count,

            };
        }


    }
}
