using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Microsoft.Extensions.Configuration;

namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public class AddCourseUserService : IAddCourseUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddCourseUserService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddCourseUserDto> Execute(RequestAddCourseUserDto request)
        {


            try
            {
                CourseUser courseUser = new CourseUser
                {
                    CourseScore = request.CourseScore,
                    UserId = request.UserId,
                    CouserId = request.CouserId,
                };
                _context.CourseUsers.Add(courseUser);
                _context.SaveChanges();
                return new ResultDto<ResultAddCourseUserDto>
                {
                    Data = new ResultAddCourseUserDto
                    {
                        CourseUserId = courseUser.CourseUserId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddCourseUserDto>
                {
                    Data = new ResultAddCourseUserDto { CourseUserId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
