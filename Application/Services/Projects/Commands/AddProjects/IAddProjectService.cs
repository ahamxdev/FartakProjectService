using Common.Dto;

namespace Application.Services.Projects.Commands.AddProjects
{
    public interface IAddProjectService
    {
        ResultDto<ResultAddProjectDto> Execute(RequestAddProjectDto request);
    }
}
