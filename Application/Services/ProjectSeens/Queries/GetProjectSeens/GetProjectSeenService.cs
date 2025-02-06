using Application.Interfaces.Contexts;
using Application.Services.ProjectSeens.Queries.GetProjectSeens;

namespace Application.Services.ProjectSeens.Commands.AddProjectSeens
{
    public class GetProjectSeenService : IGetProjectSeenService
    {
        private readonly IDatabaseContext _context;
        public GetProjectSeenService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectSeenDto GetById(RequestGetProjectSeenByIdDto request)
        {
            var ProjectSeen = _context.ProjectSeens.Where(x => x.ProjectSeenId == request.ProjectSeenId);
            var ProjectSeenList = ProjectSeen.Select(p => new GetProjectSeenDto
            {
                ProjectId = p.ProjectId,
                ProjectSeenId = p.ProjectSeenId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectSeenId).ToList();
            return new ResultGetProjectSeenDto
            {
                ProjectSeens = ProjectSeenList,
                Rows = ProjectSeenList.Count,
            };
        }


        public ResultGetProjectSeenDto GetByProjectId(RequestGetProjectSeenByProjectIdDto request)
        {
            var ProjectSeen = _context.ProjectSeens.Where(x => x.ProjectId == request.ProjectId);
            var ProjectSeenList = ProjectSeen.Select(p => new GetProjectSeenDto
            {
                ProjectId = p.ProjectId,
                ProjectSeenId = p.ProjectSeenId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectSeenId).ToList();
            return new ResultGetProjectSeenDto
            {
                ProjectSeens = ProjectSeenList,
                Rows = ProjectSeenList.Count,
            };
        }




        public ResultGetProjectSeenDto GetAll()
        {
            var ProjectSeen = _context.ProjectSeens;
            var ProjectSeenList = ProjectSeen.Select(p => new GetProjectSeenDto
            {
                ProjectId = p.ProjectId,
                ProjectSeenId = p.ProjectSeenId,
                UserId = p.UserId

            }).OrderBy(x => x.ProjectSeenId).ToList();
            return new ResultGetProjectSeenDto
            {
                ProjectSeens = ProjectSeenList,
                Rows = ProjectSeenList.Count,
            };
        }
    }
}
