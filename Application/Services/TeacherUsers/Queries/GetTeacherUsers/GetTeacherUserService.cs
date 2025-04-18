using Application.Interfaces.Contexts;
using Application.Services.TeacherTypes.Queries.GetTeacherTypes;
using Application.Services.Users.Queries.GetUsers;

namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public class GetTeacherUserService : IGetTeacherUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IGetUserService _getUserService;
        private readonly IGetTeacherTypeService _getTeacherTypeService;
        public GetTeacherUserService(IDatabaseContext context, IGetUserService getUserService,
            IGetTeacherTypeService getTeacherTypeService)
        {
            _context = context;
            _getTeacherTypeService = getTeacherTypeService;
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
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
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
                    Place = teacherUser.Place,
                    LanguageTeach = teacherUser.LanguageTeach,
                    OurSelect= teacherUser.OurSelect,   
                    UserId = teacherUser.UserId,
                    Duration= teacherUser.Duration,
                    PercentOff=teacherUser.PercentOff,
                    TeacherTypeTitle = teacherTypeName,
                    AllowUploadCourse=teacherUser.AllowUploadCourse,
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
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


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
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
                    Place = teacherUser.Place,
                    LanguageTeach = teacherUser.LanguageTeach,
                    OurSelect=teacherUser.OurSelect,
                    UserId = teacherUser.UserId,
                    Duration = teacherUser.Duration,
                    PercentOff = teacherUser.PercentOff,
                    TeacherTypeTitle = teacherTypeName,
                    AllowUploadCourse = teacherUser.AllowUploadCourse,
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


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
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
                    Place = teacherUser.Place,
                    LanguageTeach = teacherUser.LanguageTeach,
                    Duration = teacherUser.Duration,
                    UserId = teacherUser.UserId,
                    PercentOff = teacherUser.PercentOff,
                    TeacherTypeTitle = teacherTypeName,
                    OurSelect=teacherUser.OurSelect,
                    AllowUploadCourse = teacherUser.AllowUploadCourse,
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


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {


                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    OurSelect = teacherUser.OurSelect,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching = teacherUser.TypeTeaching,
                    Place = teacherUser.Place,
                    Duration = teacherUser.Duration,
                    LanguageTeach = teacherUser.LanguageTeach,
                    UserId = teacherUser.UserId,
                    PercentOff = teacherUser.PercentOff,
                    TeacherTypeTitle = teacherTypeName,
                    AllowUploadCourse = teacherUser.AllowUploadCourse,
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };
        }

        public ResultGetTeacherUserDto GetByUserId(RequestGetTeacherUserByUserIdDto request)
        {
            var teacherUsers = _context.TeacherUsers.Where(x => x.UserId == request.UserId);

            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";

                if (user.Rows > 0)
                {
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
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
                    Place = teacherUser.Place,
                    LanguageTeach = teacherUser.LanguageTeach,
                    Duration = teacherUser.Duration,
                    UserId = teacherUser.UserId,
                    OurSelect = teacherUser.OurSelect,
                    TeacherTypeTitle = teacherTypeName,
                    PercentOff = teacherUser.PercentOff,
                    AllowUploadCourse = teacherUser.AllowUploadCourse,
                });
            }
            return new ResultGetTeacherUserDto
            {
                TeacherUsers = teacherUserList.OrderBy(t => t.TeacherUserId).ToList(),
                Rows = teacherUserList.Count,
            };
        }

        public ResultGetTeacherUserDto GetByFilterAndTeacherTypeId(RequestGetTeacherUserByFilterDto request)
        {
            var teacherUsers = _context.TeacherUsers.Where(x => x.LanguageTeach == request.LanguageTeach &&
             x.Place == request.Place && x.TypeTeaching == request.TypeTeaching && x.TeacherTypeId == request.TeacherTypeId);

            List<GetTeacherUserDto> teacherUserList = new List<GetTeacherUserDto>();

            foreach (var teacherUser in teacherUsers)
            {

                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = teacherUser.UserId });

                string teacherName = "";

                if (user.Rows > 0)
                {
                    teacherName = user.Users[0].Name + " " + user.Users[0].Lastname;
                }


                var teacherType = _getTeacherTypeService.GetById(new RequestGetTeacherTypesByIdDto { TeacherTypeId = teacherUser.TeacherTypeId });

                string teacherTypeName = "";
                if (teacherType.Rows > 0)
                {
                    teacherTypeName = teacherType.TeacherTypes[0].Title;
                }


                teacherUserList.Add(new GetTeacherUserDto
                {


                    City = teacherUser.City,
                    Description = teacherUser.Description,
                    ImageName = teacherUser.ImageName,
                    TeacherName = teacherName,
                    VideoName = teacherUser.VideoName,
                    Gender = teacherUser.Gender,
                    OurSelect = teacherUser.OurSelect,
                    InPersonPrice = teacherUser.InPersonPrice,
                    OnlinePrice = teacherUser.OnlinePrice,
                    TeacherTypeId = teacherUser.TeacherTypeId,
                    TeacherUserId = teacherUser.TeacherUserId,
                    TypeTeaching = teacherUser.TypeTeaching,
                    Place = teacherUser.Place,
                    LanguageTeach = teacherUser.LanguageTeach,
                    PercentOff = teacherUser.PercentOff,
                    UserId = teacherUser.UserId,
                    Duration = teacherUser.Duration,
                    TeacherTypeTitle = teacherTypeName,
                    AllowUploadCourse = teacherUser.AllowUploadCourse,
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
