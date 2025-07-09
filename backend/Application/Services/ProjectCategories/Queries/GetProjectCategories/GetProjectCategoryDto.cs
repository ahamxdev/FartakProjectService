namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public class GetProjectCategoryDto
    {
        public long ProjectCategoryId { get; set; }
        public required string Name { get; set; }
    }
}
