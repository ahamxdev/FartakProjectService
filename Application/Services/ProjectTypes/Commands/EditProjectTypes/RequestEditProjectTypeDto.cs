namespace Application.Services.ProjectTypes.Commands.EditProjectTypes
{
    public class RequestEditProjectTypeDto
    {
        public long ProjectTypeId { get; set; }
        public required string Title { get; set; }
    }
}
