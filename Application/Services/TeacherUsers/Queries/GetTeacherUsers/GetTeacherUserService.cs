using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUsers;

namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public class GetTeacherUserService : IGetTeacherUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IGetUserService _getUserService;
        public GetTeacherUserService(IDatabaseContext context, IGetUserService getUserService)
        {
            _context = context;
            _getUserService = getUserService;
        }
        public ResultGetTeacherUserDto GetAll()
        {
            var teacherUser = _context.TeacherUsers;
            var teacherUserList = teacherUser.Select(p => new GetTeacherUserDto
            {
                Description = p.Description,
                ImageName = p.ImageName,
                VideoName = p.VideoName,
                TeacherUserId = p.TeacherUserId,
                UserId = p.UserId,
                Gender = p.Gender,
                InPersonPrice = p.InPersonPrice,
                OnlinePrice = p.OnlinePrice,
                TypeTeaching = p.TypeTeaching,
                City = p.City,
                TeacherTypeId = p.TeacherTypeId

            }).OrderBy(x => x.TeacherUserId).ToList();
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList,
                Rows = teacherUserList.Count,
            };

        }


        public ResultGetTeacherUserDto GetByTeacherId(RequestGetTeacherUserByTeacherIdDto request)
        {
            var teacherUser = _context.TeacherUsers.Where(x => x.UserId == request.TeacherId);
            var teacherUserList = teacherUser.Select(p => new GetTeacherUserDto
            {
                City = p.City,
                Description = p.Description,
                ImageName = p.ImageName,
                VideoName = p.VideoName,
                TeacherUserId = p.TeacherUserId,
                UserId = p.UserId,
                Gender = p.Gender,
                InPersonPrice = p.InPersonPrice,
                OnlinePrice = p.OnlinePrice,
                TypeTeaching = p.TypeTeaching,
                TeacherTypeId = p.TeacherTypeId

            }).OrderBy(x => x.TeacherUserId).ToList();
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList,
                Rows = teacherUserList.Count,
            };

        }

        public ResultGetTeacherUserDto GetByTeacherUserId(RequestGetTeacherUserByIdDto request)
        {
            var teacherUser = _context.TeacherUsers.Where(x => x.TeacherUserId == request.TeacherUserId);
            var teacherUserList = teacherUser.Select(p => new GetTeacherUserDto
            {
                City = p.City,
                Description = p.Description,
                ImageName = p.ImageName,
                VideoName = p.VideoName,
                TeacherUserId = p.TeacherUserId,
                UserId = p.UserId,
                Gender = p.Gender,
                InPersonPrice = p.InPersonPrice,
                OnlinePrice = p.OnlinePrice,
                TypeTeaching = p.TypeTeaching,
                TeacherTypeId = p.TeacherTypeId

            }).OrderBy(x => x.TeacherUserId).ToList();
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList,
                Rows = teacherUserList.Count,
            };

        }


        public ResultGetTeacherUserDto GetByTeacherTypeId(RequestGetTeacherUserByTeacherTypeIdDto request)
        {
            var teacherUser = _context.TeacherUsers.Where(x => x.TeacherTypeId == request.TeacherTypeId);
            var teacherUserList = teacherUser.Select(p => new GetTeacherUserDto
            {
                City = p.City,
                Description = p.Description,
                ImageName = p.ImageName,
                VideoName = p.VideoName,
                TeacherUserId = p.TeacherUserId,
                UserId = p.UserId,
                Gender = p.Gender,
                InPersonPrice = p.InPersonPrice,
                OnlinePrice = p.OnlinePrice,
                TypeTeaching = p.TypeTeaching,
                TeacherTypeId = p.TeacherTypeId

            }).OrderBy(x => x.TeacherUserId).ToList();
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList,
                Rows = teacherUserList.Count,
            };

        }


    }

}
