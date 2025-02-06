namespace Application.Services.ProjectLikes.Queries.GetProjectLikes
{
    public interface IGetProjectLikeService
    {
        ResultGetProjectLikeDto GetById(RequestGetProjectLikeByIdDto request);
        ResultGetProjectLikeDto GetByProjectId(RequestGetProjectLikeByProjectIdDto request);
        ResultGetProjectLikeDto GetByUserId(RequestGetProjectLikeByUserIdDto request);
        ResultGetProjectLikeDto GetAll();
    }
}
