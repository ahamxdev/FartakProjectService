namespace Application.Services.ProjectLikes.Queries.GetProjectLikes
{
    public class GetProjectLikeDto
    {
        public long ProjectLikeId { get; set; }
        public long ProjectId { get; set; }
        public long UserId { get; set; }
    }
}
