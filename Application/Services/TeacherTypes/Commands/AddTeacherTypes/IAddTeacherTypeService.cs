using Common.Dto;

namespace Application.Services.TeacherTypes.Commands.AddTeacherTypes
{
    public interface IAddTeacherTypeService
    {
        ResultDto<ResultAddTeacherTypesDto> Execute(RequestAddTeacherTypesDto request);
    }
}
