namespace Application.Services.ProjectTypes.Queries.GetProjectTypes
{
    public class GetProjectTypeDto
    {
        public long ProjectTypeId { get; set; }
        public required string Title { get; set; }
    }
}
