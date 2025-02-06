using Common.Dto;

namespace Application.Services.ProjectLikes.Commands.RemoveProjectLikes
{
    public interface IRemoveProjectLikeService
    {
        ResultDto Execute(RequestRemoveProjectLikeDto request);
    }
}
