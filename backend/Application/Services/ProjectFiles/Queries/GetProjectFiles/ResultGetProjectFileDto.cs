namespace Application.Services.ProjectFiles.Queries.GetProjectFiles
{
    public class ResultGetProjectFileDto
    {
        public required List<GetProjectFileDto> ProjectFiles { get; set; }
        public long Rows { get; set; }
    }
}
