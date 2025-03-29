using Application.Interfaces.Contexts;
using Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers;

namespace Application.Services.ProjectTeamMembers.Commands.AddProjectTeamMembers
{
    public class GetProjectTeamMemberService : IGetProjectTeamMemberService
    {
        private readonly IDatabaseContext _context;
        public GetProjectTeamMemberService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectTeamMemberDto GetById(RequestGetProjectTeamMemberByIdDto request)
        {
            var ProjectTeamMember = _context.ProjectTeamMembers.Where(x => x.ProjectTeamMemberId == request.ProjectTeamMemberId);
            var ProjectTeamMemberList = ProjectTeamMember.Select(p => new GetProjectTeamMemberDto
            {
                IsHead=p.IsHead,
                MemberId=p.MemberId,
                ProjectTeamId=p.ProjectTeamId,
                ProjectTeamMemberId = p.ProjectTeamMemberId,

            }).OrderBy(x => x.ProjectTeamMemberId).ToList();
            return new ResultGetProjectTeamMemberDto
            {
                ProjectTeamMembers = ProjectTeamMemberList,
                Rows = ProjectTeamMemberList.Count,
            };
        }

        public ResultGetProjectTeamMemberDto GetByProjectTeamId(RequestGetProjectTeamMemberByProjectTeamIdDto request)
        {
            var ProjectTeamMember = _context.ProjectTeamMembers.Where(x => x.ProjectTeamId == request.ProjectTeamId);
            var ProjectTeamMemberList = ProjectTeamMember.Select(p => new GetProjectTeamMemberDto
            {
                IsHead = p.IsHead,
                MemberId = p.MemberId,
                ProjectTeamId = p.ProjectTeamId,
                ProjectTeamMemberId = p.ProjectTeamMemberId,

            }).OrderBy(x => x.ProjectTeamMemberId).ToList();
            return new ResultGetProjectTeamMemberDto
            {
                ProjectTeamMembers = ProjectTeamMemberList,
                Rows = ProjectTeamMemberList.Count,
            };
        }

        public ResultGetProjectTeamMemberDto GetAll()
        {
            var ProjectTeamMember = _context.ProjectTeamMembers;
            var ProjectTeamMemberList = ProjectTeamMember.Select(p => new GetProjectTeamMemberDto
            {
                IsHead = p.IsHead,
                MemberId = p.MemberId,
                ProjectTeamId = p.ProjectTeamId,
                ProjectTeamMemberId = p.ProjectTeamMemberId,

            }).OrderBy(x => x.ProjectTeamMemberId).ToList();
            return new ResultGetProjectTeamMemberDto
            {
                ProjectTeamMembers = ProjectTeamMemberList,
                Rows = ProjectTeamMemberList.Count,
            };
        }
    }
}
