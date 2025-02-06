namespace Application.Services.Courses.Queries.GetCourses
{
    public class GetCourseDto
    {
        public long CourseId { get; set; }
        public long CourseTypeId { get; set; }
        public long TeacherId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long Price { get; set; }
        public int status { get; set; } //0 NotAccept , 1 Accept
        public required string VideoName { get; set; }
        public long Duration { get; set; }
        public required string TeacherName { get; set; }
    }
}
