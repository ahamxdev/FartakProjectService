using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public interface IAddProjectCategoryService
    {
        ResultDto<ResultAddProjectCategoryDto> Execute(RequestAddProjectCategoryDto request);
    }
}
