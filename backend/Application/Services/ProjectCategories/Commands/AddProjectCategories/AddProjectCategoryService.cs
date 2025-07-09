using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.TeacherUser;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public class AddProjectCategoryService : IAddProjectCategoryService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectCategoryService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectCategoriesDto> ExecuteParent(RequestAddProjectCategoriesParentDto request)
        {


            try
            {
                ProjectCategory ProjectCategories = new ProjectCategory
                {
                    Title = request.Title,
                    ProjectCategoryParentId = 0

                };
                _context.ProjectCategories.Add(ProjectCategories);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectCategoriesDto>
                {
                    Data = new ResultAddProjectCategoriesDto
                    {
                        ProjectCategoryId = ProjectCategories.ProjectCategoryId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectCategoriesDto>
                {
                    Data = new ResultAddProjectCategoriesDto { ProjectCategoryId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }


        public ResultDto<ResultAddProjectCategoriesDto> ExecuteChild(RequestAddProjectCategoriesChildDto request)
        {


            try
            {
                ProjectCategory ProjectCategories = new ProjectCategory
                {
                    Title = request.Title,
                    ProjectCategoryParentId = request.ProjectCategoryParentId,

                };
                _context.ProjectCategories.Add(ProjectCategories);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectCategoriesDto>
                {
                    Data = new ResultAddProjectCategoriesDto
                    {
                        ProjectCategoryId = ProjectCategories.ProjectCategoryId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectCategoriesDto>
                {
                    Data = new ResultAddProjectCategoriesDto { ProjectCategoryId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }
    }
}
