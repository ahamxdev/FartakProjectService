using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
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
        public ResultDto<ResultAddProjectCategoryDto> Execute(RequestAddProjectCategoryDto request)
        {


            try
            {
                ProjectCategory ProjectCategory = new ProjectCategory
                {
                    Name = request.Name,
                };
                _context.ProjectCategories.Add(ProjectCategory);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectCategoryDto>
                {
                    Data = new ResultAddProjectCategoryDto
                    {
                        ProjectCategoryId = ProjectCategory.ProjectCategoryId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectCategoryDto>
                {
                    Data = new ResultAddProjectCategoryDto { ProjectCategoryId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
