namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public class RequestEditProjectCategoryDto
    {
        public long ProjectCategoryId { get; set; }
        public required string Name { get; set; }
    }
}
