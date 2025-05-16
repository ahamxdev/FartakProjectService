using Application.Interfaces.Contexts;
using Application.Services.ProjectLikes.Queries.GetProjectLikes;

namespace Application.Services.ProjectLikes.Commands.AddProjectLikes
{
    public class GetProjectLikeService : IGetProjectLikeService
    {
        private readonly IDatabaseContext _context;
        public GetProjectLikeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectLikeDto GetById(RequestGetProjectLikeByIdDto request)
        {
            var ProjectLike = _context.ProjectLikes.Where(x => x.ProjectLikeId == request.ProjectLikeId);
            var ProjectLikeList = ProjectLike.Select(p => new GetProjectLikeDto
            {
                ProjectId = p.ProjectId,
                ProjectLikeId = p.ProjectLikeId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectLikeId).ToList();
            return new ResultGetProjectLikeDto
            {
                ProjectLikes = ProjectLikeList,
                Rows = ProjectLikeList.Count,
            };
        }


        public ResultGetProjectLikeDto GetByProjectId(RequestGetProjectLikeByProjectIdDto request)
        {
            var ProjectLike = _context.ProjectLikes.Where(x => x.ProjectId == request.ProjectId);
            var ProjectLikeList = ProjectLike.Select(p => new GetProjectLikeDto
            {
                ProjectId = p.ProjectId,
                ProjectLikeId = p.ProjectLikeId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectLikeId).ToList();
            return new ResultGetProjectLikeDto
            {
                ProjectLikes = ProjectLikeList,
                Rows = ProjectLikeList.Count,
            };
        }

        public ResultGetProjectLikeDto GetByUserId(RequestGetProjectLikeByUserIdDto request)
        {
            var ProjectLike = _context.ProjectLikes.Where(x => x.UserId == request.UserId);
            var ProjectLikeList = ProjectLike.Select(p => new GetProjectLikeDto
            {
                UserId = p.UserId,
                ProjectLikeId = p.ProjectLikeId,
                ProjectId = p.ProjectId,

            }).OrderBy(x => x.ProjectLikeId).ToList();
            return new ResultGetProjectLikeDto
            {
                ProjectLikes = ProjectLikeList,
                Rows = ProjectLikeList.Count,
            };
        }


        public ResultGetProjectLikeDto GetAll()
        {
            var ProjectLike = _context.ProjectLikes;
            var ProjectLikeList = ProjectLike.Select(p => new GetProjectLikeDto
            {
                ProjectId = p.ProjectId,
                ProjectLikeId = p.ProjectLikeId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectLikeId).ToList();
            return new ResultGetProjectLikeDto
            {
                ProjectLikes = ProjectLikeList,
                Rows = ProjectLikeList.Count,
            };
        }
    }
}
