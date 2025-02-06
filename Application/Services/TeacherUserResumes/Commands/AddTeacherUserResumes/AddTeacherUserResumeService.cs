using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.TeacherUser;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes
{
    public class AddTeacherUserResumeService : IAddTeacherUserResumeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddTeacherUserResumeService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddTeacherUserResumeDto> Execute(RequestAddTeacherUserResumeDto request)
        {


            try
            {
                TeacherUserResume teacherUserResume = new TeacherUserResume
                {
                    ResumeText = request.ResumeText,
                    TeacherUserId = request.TeacherUserId,
                };
                _context.TeacherUserResumes.Add(teacherUserResume);
                _context.SaveChanges();
                return new ResultDto<ResultAddTeacherUserResumeDto>
                {
                    Data = new ResultAddTeacherUserResumeDto
                    {
                        TeacherUserResumeId = teacherUserResume.TeacherUserResumeId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddTeacherUserResumeDto>
                {
                    Data = new ResultAddTeacherUserResumeDto { TeacherUserResumeId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
