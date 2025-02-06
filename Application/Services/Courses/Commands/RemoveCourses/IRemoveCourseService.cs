using Common.Dto;

namespace Application.Services.Courses.Commands.RemoveCourses
{
    public interface IRemoveCourseService
    {
        ResultDto Execute(RequestRemoveCourseDto request);
    }
}
