namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public class ResultGetProjectCategoryDto
    {
        public required List<GetProjectCategoryDto> ProjectCategories { get; set; }
        public long Rows { get; set; }
    }
}
