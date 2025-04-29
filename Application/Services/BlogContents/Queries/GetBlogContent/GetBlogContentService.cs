using Application.Interfaces.Contexts;

namespace Application.Services.BlogContents.Queries.GetBlogContent
{
    public class GetBlogContentService : IGetBlogContentService
    {
        private readonly IDatabaseContext _context;

        public GetBlogContentService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetBlogContentDto GetById(RequestGetBlogContentByIdDto request)
        {
            var blogContents = _context.BlogContents.Where(x => x.BlogContentId == request.BlogContentId);
            var blogContentList = blogContents.Select(p => new GetBlogContentDto
            {
                CreatedDate = p.CreatedDate,
                CreatedTime = p.CreatedTime,
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                UpdateDate = p.UpdateDate,
                UpdateTime = p.UpdateTime,
                BlogContentId = p.BlogContentId,
                BlogId = p.BlogId


            }).OrderBy(x => x.BlogContentId).ToList();
            return new ResultGetBlogContentDto()
            {

                BlogContents = blogContentList,
                Rows = blogContentList.Count,

            };
        }


        public ResultGetBlogContentDto GetByBlogId(RequestGetBlogContentByBlogIdDto request)
        {
            var blogContents = _context.BlogContents.Where(x => x.BlogId == request.BlogId);
            var blogContentList = blogContents.Select(p => new GetBlogContentDto
            {
                CreatedDate = p.CreatedDate,
                CreatedTime = p.CreatedTime,
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                UpdateDate = p.UpdateDate,
                UpdateTime = p.UpdateTime,
                BlogContentId = p.BlogContentId,
                BlogId = p.BlogId


            }).OrderBy(x => x.BlogContentId).ToList();
            return new ResultGetBlogContentDto()
            {

                BlogContents = blogContentList,
                Rows = blogContentList.Count,

            };
        }


        public ResultGetBlogContentDto GetAll()
        {
            var blogContents = _context.BlogContents;
            var blogContentList = blogContents.Select(p => new GetBlogContentDto
            {
                CreatedDate = p.CreatedDate,
                CreatedTime = p.CreatedTime,
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                UpdateDate = p.UpdateDate,
                UpdateTime = p.UpdateTime,
                BlogContentId = p.BlogContentId,
                BlogId = p.BlogId


            }).OrderBy(x => x.BlogContentId).ToList();
            return new ResultGetBlogContentDto()
            {

                BlogContents = blogContentList,
                Rows = blogContentList.Count,

            };
        }

    }
}
