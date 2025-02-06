using Common.Dto;

namespace Application.Services.TeacherUserSelects.Commands.EditTeacherUserSelects
{
    public interface IEditTeacherUserSelectService
    {
        ResultDto Execute(RequestEditTeacherUserSelectDto request);
    }
}
