using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUserSelects.Commands.EditTeacherUserSelects
{
    public class EditTeacherUserSelectService : IEditTeacherUserSelectService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditTeacherUserSelectService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditTeacherUserSelectDto request)
        {
            if (_context.TeacherUserSelects.Count(x => x.TeacherUserSelectId != request.TeacherUserSelectId &&
                    x.TeacherId == request.TeacherId &&
                      x.StudentId == request.StudentId) > 0)
            {

                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "این استاد توسط کاربر قبلا انتخاب شده است"
                };

            }


            var TeacherUserSelect = _context.TeacherUserSelects.Find(request.TeacherUserSelectId);
            if (TeacherUserSelect == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                TeacherUserSelect.Status = request.Status;
                TeacherUserSelect.Score = request.Score;
                TeacherUserSelect.TeacherId = request.TeacherId;


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
