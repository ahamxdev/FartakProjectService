

namespace Application.Services.ProjectTypes.Queries.GetProjectTypes
{
    public class ResultGetProjectTypeDto
    {
        public required List<GetProjectTypeDto> ProjectTypes { get; set; }
        public long Rows { get; set; }
    }
}
