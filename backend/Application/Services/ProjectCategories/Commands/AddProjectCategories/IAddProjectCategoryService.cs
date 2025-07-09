using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public interface IAddProjectCategoryService
    {
        ResultDto<ResultAddProjectCategoriesDto> ExecuteParent(RequestAddProjectCategoriesParentDto request);
        ResultDto<ResultAddProjectCategoriesDto> ExecuteChild(RequestAddProjectCategoriesChildDto request);
    }
}
