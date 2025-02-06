namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public interface IGetCourseUserService
    {
        ResultGetCourseUserDto GetByCourseId(RequestGetCourseByCourseIdDto request);
        ResultGetCourseUserDto GetByUserId(RequestGetByUserIdDto request);
        ResultGetCourseUserDto GetAll();
    }
}
