using Common.Dto;

namespace Application.Services.TeacherUserSelects.Commands.AddTeacherUserSelects
{
    public interface IAddTeacherUserSelectService
    {
        ResultDto<ResultAddTeacherUserSelectDto> Execute(RequestAddTeacherUserSelectDto request);
    }
}
