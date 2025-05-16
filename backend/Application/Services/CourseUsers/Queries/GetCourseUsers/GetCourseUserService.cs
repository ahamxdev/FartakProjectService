using Application.Interfaces.Contexts;

namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public class GetCourseUserService : IGetCourseUserService
    {
        private readonly IDatabaseContext _context;
        public GetCourseUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetCourseUserDto GetByUserId(RequestGetByUserIdDto request)
        {
            var CourseUser = _context.CourseUsers.Where(x => x.UserId == request.UserId);
            var CourseUserList = CourseUser.Select(p => new GetCourseUserDto
            {
                CourseUserId = p.CourseUserId,
                UserId = p.UserId,
                CourseScore = p.CourseScore,
                CouserId = p.UserId

            }).OrderBy(x => x.CourseUserId).ToList();
            return new ResultGetCourseUserDto
            {
                CourseUsers = CourseUserList,
                Rows = CourseUserList.Count,
            };
        }

        public ResultGetCourseUserDto GetByCourseId(RequestGetCourseByCourseIdDto request)
        {
            var CourseUser = _context.CourseUsers.Where(x => x.CouserId == request.CourseId);
            var CourseUserList = CourseUser.Select(p => new GetCourseUserDto
            {
                CourseUserId = p.CourseUserId,
                UserId = p.UserId,
                CourseScore = p.CourseScore,
                CouserId = p.UserId

            }).OrderBy(x => x.CourseUserId).ToList();
            return new ResultGetCourseUserDto
            {
                CourseUsers = CourseUserList,
                Rows = CourseUserList.Count,
            };
        }

        public ResultGetCourseUserDto GetAll()
        {
            var CourseUser = _context.CourseUsers;
            var CourseUserList = CourseUser.Select(p => new GetCourseUserDto
            {
                CourseUserId = p.CourseUserId,
                UserId = p.UserId,
                CourseScore = p.CourseScore,
                CouserId = p.UserId

            }).OrderBy(x => x.CourseUserId).ToList();
            return new ResultGetCourseUserDto
            {
                CourseUsers = CourseUserList,
                Rows = CourseUserList.Count,
            };
        }
    }
}
