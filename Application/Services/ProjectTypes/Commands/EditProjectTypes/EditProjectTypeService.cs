using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTypes.Commands.EditProjectTypes
{
    public class EditProjectTypeService : IEditProjectTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectTypeService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectTypeDto request)
        {

            var projectType = _context.ProjectTypes.Find(request.ProjectTypeId);
            if (projectType == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                projectType.Title = request.Title;


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
