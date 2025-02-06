using Common.Dto;

namespace Application.Services.ProjectUsers.Commands.AddProjectUsers
{
    public interface IAddProjectUserService
    {
        ResultDto<ResultAddProjectUserDto> Execute(RequestAddProjectUserDto request);
    }
}
