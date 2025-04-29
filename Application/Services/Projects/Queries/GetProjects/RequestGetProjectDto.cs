namespace Application.Services.Projects.Queries.GetProjects
{
    public class RequestGetProjectByIdDto
    {
        public long ProjectId { get; set; }
    }


    public class RequestGetProjectByProjectTypeIdDto
    {
        public long ProjectTypeId { get; set; }
    }

    public class RequestGetProjectByOwnerIdDto
    {
        public long OwnerId { get; set; }
    }
}
