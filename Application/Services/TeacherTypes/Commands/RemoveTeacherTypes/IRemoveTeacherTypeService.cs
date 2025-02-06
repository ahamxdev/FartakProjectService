using Common.Dto;

namespace Application.Services.TeacherTypes.Commands.RemoveTeacherTypes
{
    public interface IRemoveTeacherTypeService
    {
        ResultDto Execute(RequestRemoveTeacherTypesDto request);
    }
}
