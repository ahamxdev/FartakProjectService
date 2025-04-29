using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUsers;

namespace Application.Services.Courses.Queries.GetCourses
{
    public class GetCourseService : IGetCourseService
    {
        private readonly IDatabaseContext _context;
        private readonly IGetUserService _getUserService;
        public GetCourseService(IDatabaseContext context, IGetUserService getUserService)
        {
            _context = context;
            _getUserService = getUserService;
        }
        public ResultGetCourseDto GetAll()
        {

            var Courses = _context.Courses.ToList();

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }


            }


            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };

        }

        public ResultGetCourseDto GetAllAccept()
        {

            var Courses = _context.Courses.Where(c => c.Status == 1).ToList();

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }


            }


            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };

        }


        public ResultGetCourseDto GetAllWaiting()
        {

            var Courses = _context.Courses.Where(c => c.Status == 0).ToList();

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }


            }


            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };

        }


        public ResultGetCourseDto GetAllReject()
        {

            var Courses = _context.Courses.Where(c => c.Status == 2).ToList();

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }


            }


            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };

        }


        public ResultGetCourseDto GetById(RequestGetCourseByIdDto request)
        {
            var Courses = _context.Courses.Where(x => x.CourseId == request.CourseId);

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }
            }
            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };
        }



        public ResultGetCourseDto GetByCourseTypeId(RequestGetCourseByCourseTypeIdDto request)
        {
            var Courses = _context.Courses.Where(x => x.CourseTypeId == request.CourseTypeId);

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }
            }
            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };
        }


        public ResultGetCourseDto GetByTeacherId(RequestGetCourseByTeacherIdDto request)
        {
            var Courses = _context.Courses.Where(x => x.TeacherId == request.TeacherId);

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }
            }
            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };
        }


        public ResultGetCourseDto GetByUserId(RequestGetCourseByIdListDto request)
        {
            var Courses = _context.Courses.Where(x => request.CourseIds.Contains(x.CourseId));

            var courseList = new List<GetCourseDto>();

            foreach (var course in Courses)
            {
                string fullname = "";
                var user = _getUserService.GetById(new RequestGetUserByIdDto { UserId = course.TeacherId });
                if (user.Rows > 0)
                {
                    var firstname = user.Users[0].Name;
                    var lastname = user.Users[0].Lastname;
                    fullname = firstname + " " + lastname;

                    courseList.Add(new GetCourseDto
                    {
                        Description = course.Description,
                        Status = course.Status,
                        TeacherId = course.TeacherId,
                        Title = course.Title,
                        CourseTypeId = course.CourseTypeId,
                        Price = course.Price,
                        CourseId = course.CourseId,
                        VideoName = "",
                        Duration = course.Duration,
                        TeacherName = fullname,

                    });

                }
            }
            return new ResultGetCourseDto()
            {
                Courses = courseList.OrderBy(c => c.CourseId).ToList(),
                Rows = courseList.Count,
            };
        }

    }

}
