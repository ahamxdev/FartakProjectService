using Common.Dto;

namespace Application.Services.TeacherTypes.Commands.EditTeacherTypes
{
    public interface IEditTeacherTypeService
    {
        ResultDto Execute(RequestEditTeacherTypesDto request);
    }
}
