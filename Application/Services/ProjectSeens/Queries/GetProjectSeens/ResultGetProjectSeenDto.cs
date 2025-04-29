namespace Application.Services.ProjectSeens.Queries.GetProjectSeens
{
    public class ResultGetProjectSeenDto
    {
        public required List<GetProjectSeenDto> ProjectSeens { get; set; }
        public long Rows { get; set; }
    }
}
