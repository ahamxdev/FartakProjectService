using Common.Dto;

namespace Application.Services.Projects.Commands.EditProjects
{
    public interface IEditProjectService
    {
        ResultDto Execute(RequestEditProjectDto request);
    }
}
