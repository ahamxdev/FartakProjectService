namespace Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects
{
    public class RequestGetTeacherUserSelectByTeacherIdDto
    {
        public long TeacherId { get; set; }
    }
    public class RequestGetTeacherUserSelectByStudentIdDto
    {
        public long StudentId { get; set; }
    }

    public class RequestGetTeacherUserSelectByIdDto
    {
        public long TeacherUserSelectId { get; set; }
    }
}
