using Common.Dto;

namespace Application.Services.ProjectLikes.Commands.AddProjectLikes
{
    public interface IAddProjectLikeService
    {
        ResultDto<ResultAddProjectLikeDto> Execute(RequestAddProjectLikeDto request);
    }
}
