using Common.Dto;

namespace Application.Services.ProjectTypes.Commands.EditProjectTypes
{
    public interface IEditProjectTypeService
    {
        ResultDto Execute(RequestEditProjectTypeDto request);
    }
}
