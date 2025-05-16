namespace Application.Services.Courses.Queries.GetCourses
{

    public class RequestGetCourseByIdDto
    {
        public long CourseId { get; set; }
    }

    public class RequestGetCourseByTeacherIdDto
    {
        public long TeacherId { get; set; }
    }

    public class RequestGetCourseByCourseTypeIdDto
    {
        public long CourseTypeId { get; set; }
    }

    public class RequestGetCourseByUserIdDto
    {
        public long UserId { get; set; }
    }

    public class RequestGetCourseByIdListDto
    {
        public required List<long> CourseIds { get; set; }
    }

}
