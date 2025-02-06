namespace Application.Services.ProjectLikes.Commands.AddProjectLikes

{
    public class RequestAddProjectLikeDto
    {
        public long ProjectId { get; set; }
        public long UserId { get; set; }
    }
}
