namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public class RequestGetTeacherUserByIdDto
    {
        public long TeacherUserId { get; set; }
    }

    public class RequestGetTeacherUserByTeacherTypeIdDto
    {
        public long TeacherTypeId { get; set; }
    }


    public class RequestGetTeacherUserByUserIdDto
    {
        public long UserId { get; set; }
    }

    public class RequestGetTeacherUserByFilterDto
    {
        public int LanguageTeach { get; set; } // 0 Farsi 1 English
        public int Place { get; set; } //0Iran 1 English
        public int TypeTeaching { get; set; } // 0 Online 1 InPerson
        public long TeacherTypeId { get; set; }
        public int MaxUser { get; set; }
        public int PercentOff { get; set; }

        public int Score {  get; set; }
    }


    public class RequestGetTeacherUserByTeacherIdDto
    {
        public long TeacherId { get; set; }
    }

}
