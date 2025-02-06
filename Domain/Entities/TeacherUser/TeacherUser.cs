namespace Domain.Entities.TeacherUser
{
    public class TeacherUser
    {
        public long TeacherUserId { get; set; }
        public long UserId { get; set; }
        public long TeacherTypeId { get; set; }
        public required string Description { get; set; }
        public required string VideoName { get; set; }
        public required string ImageName { get; set; }
        public int Gender { get; set; } // 1 male 2 female 3 both
        public required string City { get; set; }
        public int TypeTeaching { get; set; } // 0 Online 1 InPerson
        public long OnlinePrice { get; set; }
        public long InPersonPrice { get; set; }
    }
}
