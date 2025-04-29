using Common.Dto;

namespace Application.Services.ProjectTypes.Commands.RemoveProjectTypes
{
    public interface IRemoveProjectTypeService
    {
        ResultDto Execute(RequestRemoveProjectTypeDto request);
    }
}
