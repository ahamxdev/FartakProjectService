using Common.Dto;

namespace Application.Services.Courses.Commands.EditCourses
{
    public interface IEditCourseService
    {
        ResultDto Execute(RequestEditCourseDto request);
        ResultDto ExecuteStatus(RequestEditCourseStatusDto request);
    }
}
