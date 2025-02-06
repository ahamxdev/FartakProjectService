using Application.Interfaces.Contexts;
using Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects;

namespace Application.Services.TeacherUserSelects.Commands.AddTeacherUserSelects
{
    public class GetTeacherUserSelectService : IGetTeacherUserSelectService
    {
        private readonly IDatabaseContext _context;
        public GetTeacherUserSelectService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetTeacherUserSelectDto GetById(RequestGetTeacherUserSelectByIdDto request)
        {
            var TeacherUserSelect = _context.TeacherUserSelects.Where(x => x.TeacherUserSelectId == request.TeacherUserSelectId);
            var TeacherUserSelectList = TeacherUserSelect.Select(p => new GetTeacherUserSelectDto
            {
                Score = p.Score,
                Status = p.Status,
                StudentId = p.StudentId,
                TeacherId = p.TeacherId,
                TeacherUserSelectId = p.TeacherUserSelectId,

            }).OrderBy(x => x.TeacherUserSelectId).ToList();
            return new ResultGetTeacherUserSelectDto
            {
                TeacherUserSelects = TeacherUserSelectList,
                Rows = TeacherUserSelectList.Count,
            };
        }


        public ResultGetTeacherUserSelectDto GetByTeacherId(RequestGetTeacherUserSelectByTeacherIdDto request)
        {
            var TeacherUserSelect = _context.TeacherUserSelects.Where(x => x.TeacherId == request.TeacherId);
            var TeacherUserSelectList = TeacherUserSelect.Select(p => new GetTeacherUserSelectDto
            {
                Score = p.Score,
                Status = p.Status,
                StudentId = p.StudentId,
                TeacherId = p.TeacherId,
                TeacherUserSelectId = p.TeacherUserSelectId,

            }).OrderBy(x => x.TeacherUserSelectId).ToList();
            return new ResultGetTeacherUserSelectDto
            {
                TeacherUserSelects = TeacherUserSelectList,
                Rows = TeacherUserSelectList.Count,
            };
        }


        public ResultGetTeacherUserSelectDto GetByStudentId(RequestGetTeacherUserSelectByStudentIdDto request)
        {
            var TeacherUserSelect = _context.TeacherUserSelects.Where(x => x.StudentId == request.StudentId);
            var TeacherUserSelectList = TeacherUserSelect.Select(p => new GetTeacherUserSelectDto
            {
                Score = p.Score,
                Status = p.Status,
                StudentId = p.StudentId,
                TeacherId = p.TeacherId,
                TeacherUserSelectId = p.TeacherUserSelectId,

            }).OrderBy(x => x.TeacherUserSelectId).ToList();
            return new ResultGetTeacherUserSelectDto
            {
                TeacherUserSelects = TeacherUserSelectList,
                Rows = TeacherUserSelectList.Count,
            };
        }


        public ResultGetTeacherUserSelectDto GetAll()
        {
            var TeacherUserSelect = _context.TeacherUserSelects;
            var TeacherUserSelectList = TeacherUserSelect.Select(p => new GetTeacherUserSelectDto
            {
                Score = p.Score,
                Status = p.Status,
                StudentId = p.StudentId,
                TeacherId = p.TeacherId,
                TeacherUserSelectId = p.TeacherUserSelectId,

            }).OrderBy(x => x.TeacherUserSelectId).ToList();
            return new ResultGetTeacherUserSelectDto
            {
                TeacherUserSelects = TeacherUserSelectList,
                Rows = TeacherUserSelectList.Count,
            };
        }
    }
}
