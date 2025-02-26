namespace Domain.Entities.TeacherUser
{
    public class TeacherType
    {
        public long TeacherTypeId { get; set; }
        public long TeacherTypeParentId { get; set; }
        public required string Title { get; set; }
    }
}
