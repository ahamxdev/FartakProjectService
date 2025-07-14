namespace Application.Services.ProjectHashtags.Commands.EditProjectHashtags
{
    public class RequestEditProjectHashtagsDto
    {
        public long ProjectHashtagId { get; set; }
        public required string Title { get; set; }
    }
}
