using Common.Dto;

namespace Application.Services.CourseTypes.Commands.AddCourseTypes
{
    public interface IAddCourseTypeService
    {
        ResultDto<ResultAddCourseTypeDto> Execute(RequestAddCourseTypeDto request);
    }
}
