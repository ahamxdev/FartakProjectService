namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public class ResultGetProjectCategoriesDto
    {
        public required List<GetProjectCategoriesDto> ProjectCategories { get; set; }
        public long Rows { get; set; }
    }
}
