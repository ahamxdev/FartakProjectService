using Application.Interfaces.Contexts;
using Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams;

namespace Application.Services.RequestProjectTeams.Commands.AddRequestProjectTeams
{
    public class GetRequestProjectTeamService : IGetRequestProjectTeamService
    {
        private readonly IDatabaseContext _context;
        public GetRequestProjectTeamService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetRequestProjectTeamDto GetById(RequestGetRequestProjectTeamByIdDto request)
        {
            var RequestProjectTeam = _context.RequestProjectTeams.Where(x => x.RequestProjectTeamId == request.RequestProjectTeamId);
            var RequestProjectTeamList = RequestProjectTeam.Select(p => new GetRequestProjectTeamDto
            {
                ProjectId=p.RequestProjectTeamId,
                Status = p.Status,
                ProjectTeamId=p.RequestProjectTeamId,
                RequestProjectTeamId = p.RequestProjectTeamId,

            }).OrderBy(x => x.RequestProjectTeamId).ToList();
            return new ResultGetRequestProjectTeamDto
            {
                RequestProjectTeams = RequestProjectTeamList,
                Rows = RequestProjectTeamList.Count,
            };
        }


        public ResultGetRequestProjectTeamDto GetByProjectId(RequestGetRequestProjectTeamByProjectIdDto request)
        {
            var RequestProjectTeam = _context.RequestProjectTeams.Where(x => x.ProjectId == request.ProjectId);
            var RequestProjectTeamList = RequestProjectTeam.Select(p => new GetRequestProjectTeamDto
            {
                ProjectId = p.RequestProjectTeamId,
                Status = p.Status,
                ProjectTeamId = p.RequestProjectTeamId,
                RequestProjectTeamId = p.RequestProjectTeamId,

            }).OrderBy(x => x.RequestProjectTeamId).ToList();
            return new ResultGetRequestProjectTeamDto
            {
                RequestProjectTeams = RequestProjectTeamList,
                Rows = RequestProjectTeamList.Count,
            };
        }



        public ResultGetRequestProjectTeamDto GetByProjectIdAndAccept(RequestGetRequestProjectTeamByProjectIdDto request)
        {
            var RequestProjectTeam = _context.RequestProjectTeams.Where(x => x.ProjectId == request.ProjectId && x.Status == 2 );
            var RequestProjectTeamList = RequestProjectTeam.Select(p => new GetRequestProjectTeamDto
            {
                ProjectId = p.RequestProjectTeamId,
                Status = p.Status,
                ProjectTeamId = p.RequestProjectTeamId,
                RequestProjectTeamId = p.RequestProjectTeamId,

            }).OrderBy(x => x.RequestProjectTeamId).ToList();
            return new ResultGetRequestProjectTeamDto
            {
                RequestProjectTeams = RequestProjectTeamList,
                Rows = RequestProjectTeamList.Count,
            };
        }


        public ResultGetRequestProjectTeamDto GetAll()
        {
            var RequestProjectTeam = _context.RequestProjectTeams;
            var RequestProjectTeamList = RequestProjectTeam.Select(p => new GetRequestProjectTeamDto
            {
                ProjectId = p.RequestProjectTeamId,
                Status = p.Status,
                ProjectTeamId = p.RequestProjectTeamId,
                RequestProjectTeamId = p.RequestProjectTeamId,

            }).OrderBy(x => x.RequestProjectTeamId).ToList();
            return new ResultGetRequestProjectTeamDto
            {
                RequestProjectTeams = RequestProjectTeamList,
                Rows = RequestProjectTeamList.Count,
            };
        }
    }
}
