namespace Application.Services.ProjectHashtags.Queries.GetProjectHashtags
{
    public class ResultGetProjectHashtagsDto
    {
        public required List<GetProjectHashtagsDto> ProjectHashtags { get; set; }
        public long Rows { get; set; }
    }
}
