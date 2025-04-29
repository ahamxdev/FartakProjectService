using Common.Dto;

namespace Application.Services.ProjectSeens.Commands.RemoveProjectSeens
{
    public interface IRemoveProjectSeenService
    {
        ResultDto Execute(RequestRemoveProjectSeenDto request);
    }
}
