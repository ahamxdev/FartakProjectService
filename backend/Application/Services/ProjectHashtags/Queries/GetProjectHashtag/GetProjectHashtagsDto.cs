namespace Application.Services.ProjectHashtags.Queries.GetProjectHashtags
{
    public class GetProjectHashtagsDto
    {
        public long ProjectHashtagId { get; set; }
        public required string Title { get; set; }
        public long ProjectHashtagParentId { get; set; }
    }
}
