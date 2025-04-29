using Common.Dto;

namespace Application.Services.Users.Commands.AddUsers
{
    public interface IAddUserService
    {

        ResultDto<ResultAddUserDto> Execute(RequestAddUserDto request);
    }
}
