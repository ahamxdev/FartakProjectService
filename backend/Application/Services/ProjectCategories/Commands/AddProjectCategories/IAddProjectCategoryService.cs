using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public interface IAddProjectCategoryService
    {
        ResultDto<ResultAddProjectCategoryDto> ExecuteParent(RequestAddProjectCategoriesParentDto request);
        ResultDto<ResultAddProjectCategoryDto> ExecuteChild(RequestAddProjectCategoriesChildDto request);
    }
}
