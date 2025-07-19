namespace Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers
{
    public class GetProjectTeamHeadDto
    {
        public int ProjectId { get; set; }
        public string ProjectTitle { get; set; }
        public string CategoryTitle { get; set; }
        public string UserFullName { get; set; }
        public int? StarRating { get; set; } // یا nullable: int?
    }

}
