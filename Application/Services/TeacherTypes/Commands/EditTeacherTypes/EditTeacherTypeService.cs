using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherTypes.Commands.EditTeacherTypes
{
    public class EditTeacherTypeService : IEditTeacherTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditTeacherTypeService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditTeacherTypesDto request)
        {

            var TeacherTypes = _context.TeacherTypes.Find(request.TeacherTypeId);
            if (TeacherTypes == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                TeacherTypes.Title = request.Title;


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
