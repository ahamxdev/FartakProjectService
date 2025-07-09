using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public interface IEditProjectCategoryService
    {
        ResultDto Execute(RequestEditProjectCategoriesDto request);
    }
}
