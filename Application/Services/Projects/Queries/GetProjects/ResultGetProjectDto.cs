namespace Application.Services.Projects.Queries.GetProjects
{
    public class ResultGetProjectDto
    {
        public required List<GetProjectDto> Projects { get; set; }
        public long Rows { get; set; }
    }
}
