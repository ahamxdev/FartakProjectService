using Common.Dto;

namespace Application.Services.TeacherUserSelects.Commands.RemoveTeacherUserSelects
{
    public interface IRemoveTeacherUserSelectService
    {
        ResultDto Execute(RequestRemoveTeacherUserSelectDto request);
    }
}
