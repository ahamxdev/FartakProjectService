using Common.Dto;

namespace Application.Services.CourseTypes.Commands.EditCourseTypes
{
    public interface IEditCourseTypeService
    {
        ResultDto Execute(RequestEditCourseTypeDto request);
    }
}
