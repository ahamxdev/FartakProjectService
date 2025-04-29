using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.TeacherUserResumes.Commands.RemoveTeacherUserResumes
{
    public class RemoveTeacherUserResumeService : IRemoveTeacherUserResumeService
    {

        private readonly IDatabaseContext _context;


        public RemoveTeacherUserResumeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveTeacherUserResumeDto request)
        {
            var TeacherUserResume = _context.TeacherUserResumes.Find(request.TeacherUserResumeId);
            if (TeacherUserResume == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.TeacherUserResumes.Remove(TeacherUserResume);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
