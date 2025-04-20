using Application.Interfaces.Contexts;
using Application.Services.ProjectUsers.Queries.GetProjectUsers;

namespace Application.Services.ProjectUsers.Commands.AddProjectUsers
{
    public class GetProjectUserService : IGetProjectUserService
    {
        private readonly IDatabaseContext _context;
        public GetProjectUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectUserDto GetByProjectId(RequestGetProjectUserByProjectIdDto request)
        {
            var ProjectUser = _context.ProjectUsers.Where(x => x.ProjectId == request.ProjectId);
            var ProjectUserList = ProjectUser.Select(p => new GetProjectUserDto
            {

                ProjectUserId = p.ProjectUserId,
                ProjectId = p.ProjectId,
                UserId = p.UserId,
                Status = p.Status,

            }).OrderBy(x => x.ProjectUserId).ToList();
            return new ResultGetProjectUserDto
            {
                ProjectUsers = ProjectUserList,
                Rows = ProjectUserList.Count,
            };
        }


        public ResultGetProjectUserDto GetByUserId(RequestGetProjectUserByUserIdDto request)
        {
            var ProjectUser = _context.ProjectUsers.Where(x => x.UserId == request.UserId);
            var ProjectUserList = ProjectUser.Select(p => new GetProjectUserDto
            {

                ProjectUserId = p.ProjectUserId,
                ProjectId = p.ProjectId,
                UserId = p.UserId,
                Status = p.Status

            }).OrderBy(x => x.ProjectUserId).ToList();
            return new ResultGetProjectUserDto
            {
                ProjectUsers = ProjectUserList,
                Rows = ProjectUserList.Count,
            };
        }

        public ResultGetProjectUserDto GetAll()
        {
            var ProjectUser = _context.ProjectUsers;
            var ProjectUserList = ProjectUser.Select(p => new GetProjectUserDto
            {
                ProjectUserId = p.ProjectUserId,
                ProjectId = p.ProjectId,
                UserId = p.UserId,
                Status = p.Status

            }).OrderBy(x => x.ProjectUserId).ToList();
            return new ResultGetProjectUserDto
            {
                ProjectUsers = ProjectUserList,
                Rows = ProjectUserList.Count,
            };
        }
    }
}
