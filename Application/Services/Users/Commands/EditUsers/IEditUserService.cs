using Common.Dto;

namespace Application.Services.Users.Commands.EditUsers
{
    public interface IEditUserService
    {
        ResultDto Execute(RequestEditUserDto request);
        ResultDto<ResultEditForgetPasseordDto> ForgetPassword(RequestEditUserForgetPasswordDto request);
        ResultDto ChangePassword(RequestChangeUserPasswordDto request);
    }
}
