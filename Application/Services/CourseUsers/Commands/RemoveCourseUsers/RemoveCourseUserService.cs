using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public class RemoveCourseUserService : IRemoveCourseUserService
    {
        private readonly IDatabaseContext _context;
        public RemoveCourseUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestRemoveCourseUserDto request)
        {

            var CourseUser = _context.CourseUsers.Where(p => p.CourseUserId == request.CourseUserId).ToList();
            if (CourseUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {
                _context.CourseUsers.RemoveRange(CourseUser);
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "حذف انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "حذف با خطا مواجه شد"
                };
            }

        }
    }
}
