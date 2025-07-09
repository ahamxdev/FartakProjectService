namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public class RequestEditProjectCategoriesDto
    {
        public long ProjectCategoryId { get; set; }
        public required string Title { get; set; }
    }
}
