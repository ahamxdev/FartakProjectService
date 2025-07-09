using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public class EditProjectCategorieservice : IEditProjectCategorieservice
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectCategorieservice(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectCategoryDto request)
        {

            var ProjectCategory = _context.ProjectCategories.Find(request.ProjectCategoryId);
            if (ProjectCategory == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                ProjectCategory.Name = request.Name;


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
