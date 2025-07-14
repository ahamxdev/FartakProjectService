using Application.Interfaces.Contexts;
using Application.Services.ProjectHashtag.Queries.GetProjectHashtag;


namespace Application.Services.ProjectHashtags.Queries.GetProjectHashtags
{
    public class GetProjectHashtagService : IGetProjectHashtagService
    {
        private readonly IDatabaseContext _context;
        public GetProjectHashtagService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectHashtagsDto GetById(RequestGetProjectHashtagByIdDto request)
        {
            var ProjectHashtags = _context.ProjectHashtags.Where(x => x.ProjectHashtagId == request.ProjectHashtagId);
            var ProjectHashtagsList = ProjectHashtags.Select(p => new GetProjectHashtagsDto
            {
                Title = p.Title,
                ProjectHashtagId = p.ProjectHashtagId,
                ProjectHashtagParentId = p.ProjectHashtagParentId,

            }).OrderBy(x => x.ProjectHashtagId).ToList();
            return new ResultGetProjectHashtagsDto
            {
                ProjectHashtags = ProjectHashtagsList,
                Rows = ProjectHashtagsList.Count,
            };
        }


        public ResultGetProjectHashtagsDto GetChildrenById(RequestGetProjectHashtagByIdDto request)
        {
            var ProjectHashtags = _context.ProjectHashtags.Where(x => x.ProjectHashtagParentId == request.ProjectHashtagId);
            var ProjectHashtagsList = ProjectHashtags.Select(p => new GetProjectHashtagsDto
            {
                Title = p.Title,
                ProjectHashtagId = p.ProjectHashtagId,
                ProjectHashtagParentId = p.ProjectHashtagParentId,

            }).OrderBy(x => x.ProjectHashtagId).ToList();
            return new ResultGetProjectHashtagsDto
            {
                ProjectHashtags = ProjectHashtagsList,
                Rows = ProjectHashtagsList.Count,
            };
        }


        public ResultGetProjectHashtagsDto GetAll()
        {
            var ProjectHashtags = _context.ProjectHashtags;
            var ProjectHashtagsList = ProjectHashtags.Select(p => new GetProjectHashtagsDto
            {
                Title = p.Title,
                ProjectHashtagId = p.ProjectHashtagId,
                ProjectHashtagParentId = p.ProjectHashtagParentId,

            }).OrderBy(x => x.ProjectHashtagId).ToList();
            return new ResultGetProjectHashtagsDto
            {
                ProjectHashtags = ProjectHashtagsList,
                Rows = ProjectHashtagsList.Count,
            };
        }


        public ResultGetProjectHashtagsDto GetAllParent()
        {
            var ProjectHashtags = _context.ProjectHashtags.Where(t => t.ProjectHashtagParentId == 0).ToList();
            var ProjectHashtagsList = ProjectHashtags.Select(p => new GetProjectHashtagsDto
            {
                Title = p.Title,
                ProjectHashtagId = p.ProjectHashtagId,
                ProjectHashtagParentId = p.ProjectHashtagParentId,

            }).OrderBy(x => x.ProjectHashtagId).ToList();
            return new ResultGetProjectHashtagsDto
            {
                ProjectHashtags = ProjectHashtagsList,
                Rows = ProjectHashtagsList.Count,
            };
        }
    }
}
