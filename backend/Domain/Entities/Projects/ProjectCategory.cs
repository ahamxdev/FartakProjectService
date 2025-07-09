namespace Domain.Entities.TeacherUser
{
    public class ProjectCategory
    {
        public long ProjectCategoryId { get; set; }
        public long ProjectCategoryParentId { get; set; }
        public required string Title { get; set; }
    }
}
