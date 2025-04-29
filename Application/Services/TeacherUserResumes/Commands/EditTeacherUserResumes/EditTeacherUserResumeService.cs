using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUserResumes.Commands.EditTeacherUserResumes
{
    public class EditTeacherUserResumeService : IEditTeacherUserResumeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditTeacherUserResumeService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditTeacherUserResumeDto request)
        {

            var teacherUserResume = _context.TeacherUserResumes.Find(request.TeacherUserResumeId);
            if (teacherUserResume == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                teacherUserResume.ResumeText = request.ResumeText;


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
