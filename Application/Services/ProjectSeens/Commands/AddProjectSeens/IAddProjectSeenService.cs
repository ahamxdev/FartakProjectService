using Common.Dto;

namespace Application.Services.ProjectSeens.Commands.AddProjectSeens
{
    public interface IAddProjectSeenService
    {
        ResultDto<ResultAddProjectSeenDto> Execute(RequestAddProjectSeenDto request);
    }
}
