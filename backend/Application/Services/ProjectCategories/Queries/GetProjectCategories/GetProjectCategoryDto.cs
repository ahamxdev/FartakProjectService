﻿namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public class GetProjectCategoryDto
    {
        public long ProjectCategoryId { get; set; }
        public required string Title { get; set; }
        public string? Image { get; set; }
        public long ProjectCategoryParentId { get; set; }
    }
}
