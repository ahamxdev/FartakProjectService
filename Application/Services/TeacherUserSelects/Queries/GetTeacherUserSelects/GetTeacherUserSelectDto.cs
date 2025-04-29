namespace Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects
{
    public class GetTeacherUserSelectDto
    {
        public long TeacherUserSelectId { get; set; }
        public long StudentId { get; set; }
        public long TeacherId { get; set; }
        public required string Name { get; set; }
        public required string LastName { get; set; }
        public int MemberCount { get; set; }

        public int MemberWho { get; set; } // 1 Me , 2 Child 3 Other 

        public int Level { get; set; } // 0 low , 1 normal , 2 good , 3 Excelent 

        public int Goal { get; set; }  //0 Train 1 Fix Error, 2 AnswerQuestion 
        public int Score { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
        public required string UntilDate { get; set; }
        public int CountDay { get; set; }
        public required string ClassDate { get; set; }
        public string? Description { get; set; }
        public required string OrderCode { get; set; }

    }
}
