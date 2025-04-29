using Application.Services.Users.Commands.AddUsers;
using Common.Dto;

namespace Application.Services.Courses.Commands.AddCourses
{
    public interface IAddCourseService
    {

        ResultDto<ResultAddCourseDto> Execute(RequestAddCourseDto request);
    }
}
