namespace Application.Services.ProjectHashtags.Commands.AddProjectHashtags
{
    public class RequestAddProjectHashtagsParentDto
    {
        public required string Title { get; set; }
    }


    public class RequestAddProjectHashtagsChildDto
    {
        public required string Title { get; set; }
        public long ProjectHashtagParentId { get; set; }
    }
}
