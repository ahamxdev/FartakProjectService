namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public class RequestAddProjectCategoriesParentDto
    {
        public required string Title { get; set; }
        public string? Image { get; set; }
    }

     
    public class RequestAddProjectCategoriesChildDto
    {
        public required string Title { get; set; }
        public string? Image { get; set; }
        public long ProjectCategoryParentId { get; set; }
    }
}
