namespace Application.Services.Projects.Queries.GetProjects
{
    public class RequestGetProjectByIdDto
    {
        public long ProjectId { get; set; }
    }


    public class RequestGetProjectByProjectCategoryIdDto
    {
        public long ProjectCategoryId { get; set; }
    }
    public class RequestGetProjectByProjectSkillIdDto
    {
        public long ProjectSkillId { get; set; }
    }
    public class RequestGetProjectByOwnerIdDto
    {
        public long OwnerId { get; set; }
    }
}
