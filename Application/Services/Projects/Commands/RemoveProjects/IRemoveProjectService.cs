using Common.Dto;

namespace Application.Services.Projects.Commands.RemoveProjects
{
    public interface IRemoveProjectService
    {
        ResultDto Execute(RequestRemoveProjectDto request);
    }
}
