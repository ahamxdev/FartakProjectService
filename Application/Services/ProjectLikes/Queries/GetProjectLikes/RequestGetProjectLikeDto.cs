namespace Application.Services.ProjectLikes.Queries.GetProjectLikes
{
    public class RequestGetProjectLikeByIdDto
    {
        public long ProjectLikeId { get; set; }
    }

    public class RequestGetProjectLikeByProjectIdDto
    {
        public long ProjectId { get; set; }
    }

    public class RequestGetProjectLikeByUserIdDto
    {
        public long UserId { get; set; }
    }
}
