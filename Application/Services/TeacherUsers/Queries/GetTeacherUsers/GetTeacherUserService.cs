using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUsers;
using Domain.Entities.TeacherUser;

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
            var teacherUsers = _context.TeacherUsers.ToList();

            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";
                if (user.Rows > 0)
                {
                    teacherName=user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {

                   
                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching=teacherUser.TypeTeaching,
                    UserId = teacherUser.UserId
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t=>t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };

        }


        public ResultGetTeacherUserDto GetByTeacherId(RequestGetTeacherUserByTeacherIdDto request)
        {
            var teacherUsers = _context.TeacherUsers.Where(x => x.UserId == request.TeacherId).ToList();
            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";
                if (user.Rows > 0)
                {
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {


                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching = teacherUser.TypeTeaching,
                    UserId = teacherUser.UserId
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };

        }

        public ResultGetTeacherUserDto GetByTeacherUserId(RequestGetTeacherUserByIdDto request)
        {
            var teacherUsers = _context.TeacherUsers.Where(x => x.TeacherUserId == request.TeacherUserId);
            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";
                if (user.Rows > 0)
                {
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {


                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching = teacherUser.TypeTeaching,
                    UserId = teacherUser.UserId
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };

        }


        public ResultGetTeacherUserDto GetByTeacherTypeId(RequestGetTeacherUserByTeacherTypeIdDto request)
        {
            var teacherUsers = _context.TeacherUsers.Where(x => x.TeacherTypeId == request.TeacherTypeId);
            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";
                if (user.Rows > 0)
                {
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {


                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching = teacherUser.TypeTeaching,
                    UserId = teacherUser.UserId
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };

        }


    }

}
