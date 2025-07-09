using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public class EditProjectCategoryService : IEditProjectCategoryService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectCategoryService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectCategoryDto request)
        {

            var ProjectCategories = _context.ProjectCategories.Find(request.ProjectCategoryId);
            if (ProjectCategories == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                ProjectCategories.Title = request.Title;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }

        }


    }
}
