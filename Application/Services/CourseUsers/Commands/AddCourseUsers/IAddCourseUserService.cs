using Common.Dto;

namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public interface IAddCourseUserService
    {

        ResultDto<ResultAddCourseUserDto> Execute(RequestAddCourseUserDto request);
    }
}
