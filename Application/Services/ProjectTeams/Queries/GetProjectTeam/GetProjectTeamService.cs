using Application.Interfaces.Contexts;
using Application.Services.ProjectTeams.Queries.GetProjectTeams;

namespace Application.Services.ProjectTeams.Commands.AddProjectTeams
{
    public class GetProjectTeamService : IGetProjectTeamService
    {
        private readonly IDatabaseContext _context;
        public GetProjectTeamService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectTeamDto GetById(RequestGetProjectTeamByIdDto request)
        {
            var ProjectTeam = _context.ProjectTeams.Where(x => x.ProjectTeamId == request.ProjectTeamId);
            var ProjectTeamList = ProjectTeam.Select(p => new GetProjectTeamDto
            {
                TeamName = p.TeamName,
                TeamDescription = p.TeamDescription,
                ProjectTypeId=p.ProjectTypeId,
                ProjectTeamId = p.ProjectTeamId,

            }).OrderBy(x => x.ProjectTeamId).ToList();
            return new ResultGetProjectTeamDto
            {
                ProjectTeams = ProjectTeamList,
                Rows = ProjectTeamList.Count,
            };
        }

        public ResultGetProjectTeamDto GetByProjectTypeId(RequestGetProjectTeamByProjectTypeIdDto request)
        {
            var ProjectTeam = _context.ProjectTeams.Where(x => x.ProjectTypeId == request.ProjectTypeId);
            var ProjectTeamList = ProjectTeam.Select(p => new GetProjectTeamDto
            {
                TeamName = p.TeamName,
                TeamDescription = p.TeamDescription,
                ProjectTypeId = p.ProjectTypeId,
                ProjectTeamId = p.ProjectTeamId,

            }).OrderBy(x => x.ProjectTeamId).ToList();
            return new ResultGetProjectTeamDto
            {
                ProjectTeams = ProjectTeamList,
                Rows = ProjectTeamList.Count,
            };
        }

        public ResultGetProjectTeamDto GetAll()
        {
            var ProjectTeam = _context.ProjectTeams;
            var ProjectTeamList = ProjectTeam.Select(p => new GetProjectTeamDto
            {
                TeamName = p.TeamName,
                TeamDescription = p.TeamDescription,
                ProjectTypeId = p.ProjectTypeId,
                ProjectTeamId = p.ProjectTeamId,

            }).OrderBy(x => x.ProjectTeamId).ToList();
            return new ResultGetProjectTeamDto
            {
                ProjectTeams = ProjectTeamList,
                Rows = ProjectTeamList.Count,
            };
        }
    }
}
