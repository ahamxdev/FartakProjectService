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
                int oldStatus = TeacherUserSelect.Status;
                int newStatus = request.Status;
                TeacherUserSelect.Status = request.Status;
                TeacherUserSelect.Score = request.Score;
                TeacherUserSelect.TeacherId = request.TeacherId;


                if (oldStatus != 1 && newStatus == 1) {


                    Random random = new Random();
                    string code;

                    do
                    {
                        code = random.Next(10000000, 99999999).ToString();
                    }
                    while (_context.TeacherUserSelects.Where(t=>t.OrderCode == code).Count()>0);

                    TeacherUserSelect.OrderCode = code;


                }


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
