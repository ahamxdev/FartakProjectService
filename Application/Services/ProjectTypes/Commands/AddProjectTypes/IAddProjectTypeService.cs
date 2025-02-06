using Common.Dto;

namespace Application.Services.ProjectTypes.Commands.AddProjectTypes
{
    public interface IAddProjectTypeService
    {
        ResultDto<ResultAddProjectTypeDto> Execute(RequestAddProjectTypeDto request);
    }
}
