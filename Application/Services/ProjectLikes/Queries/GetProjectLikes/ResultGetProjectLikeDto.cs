namespace Application.Services.ProjectLikes.Queries.GetProjectLikes
{
    public class ResultGetProjectLikeDto
    {
        public required List<GetProjectLikeDto> ProjectLikes { get; set; }
        public long Rows { get; set; }
    }

}
