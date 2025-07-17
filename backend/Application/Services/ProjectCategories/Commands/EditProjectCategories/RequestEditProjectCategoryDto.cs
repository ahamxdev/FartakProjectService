namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public class RequestEditProjectCategoryDto
    {
        public long ProjectCategoryId { get; set; }
        public required string Title { get; set; }
        public string? Image { get; set; }
    }
}
