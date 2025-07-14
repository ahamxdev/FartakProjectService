using Application.Interfaces.Contexts;
using Application.Services.Projects.Queries.GetProjects;
using Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers;
using Application.Services.Users.Queries.GetUser;

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
        public ResultGetProjectTeamHeadDto GetAllHead()
        {
            var ProjectTeamMember = (from pc in _context.ProjectCategories
                          join p in _context.Projects on pc.ProjectCategoryId equals p.ProjectCategoryId
                          join pu in _context.ProjectUsers on p.ProjectId equals pu.ProjectId
                          join ptm in _context.ProjectTeamMembers on pu.UserId equals ptm.MemberId
                          join u in _context.Users on ptm.MemberId equals u.UserId
                          where ptm.IsHead == 1
                          select new GetProjectTeamHeadDto
                          {
                              ProjectTitle = p.Title,
                              CategoryTitle = pc.Title,
                              UserFullName = u.Name + " " + u.Lastname,
                              StarRating = p.StarRating
                          }).ToList();

            
            var ProjectTeamMemberList = ProjectTeamMember.OrderByDescending(x => x.StarRating).ToList();




            return new ResultGetProjectTeamHeadDto
            {
                ProjectTeamMembers = ProjectTeamMemberList,
                Rows = ProjectTeamMemberList.ToList().Count ,
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
