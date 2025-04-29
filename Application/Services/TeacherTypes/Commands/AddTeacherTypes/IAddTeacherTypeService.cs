using Common.Dto;

namespace Application.Services.TeacherTypes.Commands.AddTeacherTypes
{
    public interface IAddTeacherTypeService
    {
        ResultDto<ResultAddTeacherTypesDto> ExecuteParent(RequestAddTeacherTypesParentDto request);
        ResultDto<ResultAddTeacherTypesDto> ExecuteChild(RequestAddTeacherTypesChildDto request);
    }
}
