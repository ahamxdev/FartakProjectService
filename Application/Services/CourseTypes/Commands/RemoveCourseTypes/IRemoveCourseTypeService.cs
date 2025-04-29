using Common.Dto;

namespace Application.Services.CourseTypes.Commands.RemoveCourseTypes
{
    public interface IRemoveCourseTypeService
    {
        ResultDto Execute(RequestRemoveCourseTypeDto request);
    }
}
