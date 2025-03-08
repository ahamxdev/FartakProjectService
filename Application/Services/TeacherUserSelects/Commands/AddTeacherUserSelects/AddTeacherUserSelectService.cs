using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.TeacherUser;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUserSelects.Commands.AddTeacherUserSelects
{
    public class AddTeacherUserSelectService : IAddTeacherUserSelectService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddTeacherUserSelectService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddTeacherUserSelectDto> Execute(RequestAddTeacherUserSelectDto request)
        {


            try
            {

                if (_context.TeacherUserSelects.Count(x => x.TeacherId == request.TeacherId &&
                       x.StudentId == request.StudentId) > 0)
                {

                    return new ResultDto<ResultAddTeacherUserSelectDto>
                    {
                        Data = new ResultAddTeacherUserSelectDto
                        {
                            TeacherUserSelectId = 0
                        },
                        IsSuccess = false,
                        Message = "این استاد توسط کاربر قبلا انتخاب شده است"
                    };

                }

                TeacherUserSelect teacherUserSelect = new TeacherUserSelect
                {
                    Score = request.Score,
                    Status = request.Status,
                    StudentId = request.StudentId,
                    TeacherId = request.TeacherId,
                };
                _context.TeacherUserSelects.Add(teacherUserSelect);
                _context.SaveChanges();
                return new ResultDto<ResultAddTeacherUserSelectDto>
                {
                    Data = new ResultAddTeacherUserSelectDto
                    {
                        TeacherUserSelectId = teacherUserSelect.TeacherUserSelectId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddTeacherUserSelectDto>
                {
                    Data = new ResultAddTeacherUserSelectDto { TeacherUserSelectId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
