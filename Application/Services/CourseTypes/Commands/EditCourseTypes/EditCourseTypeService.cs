using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.CourseTypes.Commands.EditCourseTypes
{
    public class EditCourseTypeService : IEditCourseTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditCourseTypeService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditCourseTypeDto request)
        {

            var CourseType = _context.CourseTypes.Find(request.CourseTypeId);
            if (CourseType == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                CourseType.Name = request.Name;


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
