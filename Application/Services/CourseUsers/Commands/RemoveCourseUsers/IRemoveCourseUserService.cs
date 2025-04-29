using Common.Dto;

namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public interface IRemoveCourseUserService
    {
        ResultDto Execute(RequestRemoveCourseUserDto request);
    }
}
