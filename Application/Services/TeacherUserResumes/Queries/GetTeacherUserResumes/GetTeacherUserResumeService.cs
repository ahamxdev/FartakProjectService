using Application.Interfaces.Contexts;
using Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes;

namespace Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes
{
    public class GetTeacherUserResumeService : IGetTeacherUserResumeService
    {
        private readonly IDatabaseContext _context;
        public GetTeacherUserResumeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetTeacherUserResumeDto GetById(RequestGetTeacherUserResumeByIdDto request)
        {
            var TeacherUserResume = _context.TeacherUserResumes.Where(x => x.TeacherUserResumeId == request.TeacherUserResumeId);
            var TeacherUserResumeList = TeacherUserResume.Select(p => new GetTeacherUserResumeDto
            {

                TeacherUserResumeId = p.TeacherUserResumeId,
                ResumeText = p.ResumeText,
                TeacherUserId = p.TeacherUserId,

            }).OrderBy(x => x.TeacherUserResumeId).ToList();
            return new ResultGetTeacherUserResumeDto
            {
                TeacherUserResumes = TeacherUserResumeList,
                Rows = TeacherUserResumeList.Count,
            };
        }

        public ResultGetTeacherUserResumeDto GetByTeacherUserId(RequestGetTeacherUserResumeByTeacherUserIdDto request)
        {
            var TeacherUserResume = _context.TeacherUserResumes.Where(x => x.TeacherUserId == request.TeacherUserId);
            var TeacherUserResumeList = TeacherUserResume.Select(p => new GetTeacherUserResumeDto
            {

                TeacherUserResumeId = p.TeacherUserResumeId,
                ResumeText = p.ResumeText,
                TeacherUserId = p.TeacherUserId,

            }).OrderBy(x => x.TeacherUserResumeId).ToList();
            return new ResultGetTeacherUserResumeDto
            {
                TeacherUserResumes = TeacherUserResumeList,
                Rows = TeacherUserResumeList.Count,
            };
        }

        public ResultGetTeacherUserResumeDto GetAll()
        {
            var TeacherUserResume = _context.TeacherUserResumes;
            var TeacherUserResumeList = TeacherUserResume.Select(p => new GetTeacherUserResumeDto
            {
                TeacherUserResumeId = p.TeacherUserResumeId,
                ResumeText = p.ResumeText,
                TeacherUserId = p.TeacherUserId,

            }).OrderBy(x => x.TeacherUserResumeId).ToList();
            return new ResultGetTeacherUserResumeDto
            {
                TeacherUserResumes = TeacherUserResumeList,
                Rows = TeacherUserResumeList.Count,
            };
        }
    }
}
