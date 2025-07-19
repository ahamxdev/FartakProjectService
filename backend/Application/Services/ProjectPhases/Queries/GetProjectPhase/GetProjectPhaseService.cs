using Application.Interfaces.Contexts;
namespace Application.Services.ProjectPhases.Queries.GetProjectPhase
{
    public class GetProjectPhaseService : IGetProjectPhaseService
    {
        private readonly IDatabaseContext _context;
        public GetProjectPhaseService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectPhaseDto GetById(RequestGetProjectPhaseByIdDto request)
        {
            var ProjectPhase = _context.ProjectPhases.Where(x => x.ProjectPhaseId == request.ProjectPhaseId);
            var ProjectPhaseList = ProjectPhase.Select(p => new GetProjectPhaseDto
            {
                Price = p.Price,
                 Duration = p.Duration,
                 ProjectId = p.ProjectId,
                 ProjectTeamId=p.ProjectTeamId,
                ProjectPhaseId = p.ProjectPhaseId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,

            }).OrderBy(x => x.ProjectPhaseId).ToList();
            return new ResultGetProjectPhaseDto
            {
                ProjectPhases = ProjectPhaseList,
                Rows = ProjectPhaseList.Count,
            };
        }


        public ResultGetProjectPhaseDto GetByProjectId(RequestGetProjectPhaseByProjectIdDto request)
        {
            var ProjectPhase = _context.ProjectPhases.Where(x => x.ProjectId == request.ProjectId);
            var ProjectPhaseList = ProjectPhase.Select(p => new GetProjectPhaseDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectId = p.ProjectId,
                ProjectTeamId = p.ProjectTeamId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                ProjectPhaseId = p.ProjectPhaseId,

            }).OrderBy(x => x.ProjectPhaseId).ToList();
            return new ResultGetProjectPhaseDto
            {
                ProjectPhases = ProjectPhaseList,
                Rows = ProjectPhaseList.Count,
            };
        }
        public ResultGetProjectPhaseDto GetByProjectOwnerId(RequestGetProgressPercentByIdDto request)
        {
            var ProjectPhase = _context.Projects
    .Where(p => p.OwnerId == request.OwnerId && p.ProjectId == request.ProjectId)
    .SelectMany(p => p.ProjectPhases);   

            
            var ProjectPhaseList = ProjectPhase.Select(p => new GetProjectPhaseDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectId = p.ProjectId,
                ProjectTeamId = p.ProjectTeamId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                ProjectPhaseId = p.ProjectPhaseId,

            }).OrderBy(x => x.ProjectPhaseId).ToList();
            return new ResultGetProjectPhaseDto
            {
                ProjectPhases = ProjectPhaseList,
                Rows = ProjectPhaseList.Count,
            };
        }
        public int GetByProjectProgressPercent(RequestGetProgressPercentByIdDto request)
        {
            int count = _context.Projects
    .Where(p => p.OwnerId == request.OwnerId && p.ProjectId == request.ProjectId) 
    .SelectMany(p => p.ProjectPhases)
    .Count(phase => phase.Status == 2 );
            int count1 = _context.Projects
   .Where(p => p.OwnerId == request.OwnerId && p.ProjectId == request.ProjectId)
   .SelectMany(p => p.ProjectPhases)
   .Count();
            return (count/count1) * 100; 
        }

        public ResultGetProjectPhaseDto GetByProjectTeamId(RequestGetProjectPhaseByProjectTeamIdDto request)
        {
            var ProjectPhase = _context.ProjectPhases.Where(x => x.ProjectTeamId == request.ProjectTeamId);
            var ProjectPhaseList = ProjectPhase.Select(p => new GetProjectPhaseDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectId = p.ProjectId,
                ProjectTeamId = p.ProjectTeamId,
                ProjectPhaseId = p.ProjectPhaseId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,

            }).OrderBy(x => x.ProjectPhaseId).ToList();
            return new ResultGetProjectPhaseDto
            {
                ProjectPhases = ProjectPhaseList,
                Rows = ProjectPhaseList.Count,
            };
        }




        public ResultGetProjectPhaseDto GetAll()
        {
            var ProjectPhase = _context.ProjectPhases;
            var ProjectPhaseList = ProjectPhase.Select(p => new GetProjectPhaseDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectId = p.ProjectId,
                ProjectTeamId = p.ProjectTeamId,
                ProjectPhaseId = p.ProjectPhaseId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,

            }).OrderBy(x => x.ProjectPhaseId).ToList();
            return new ResultGetProjectPhaseDto
            {
                ProjectPhases = ProjectPhaseList,
                Rows = ProjectPhaseList.Count,
            };
        }
    }
}
