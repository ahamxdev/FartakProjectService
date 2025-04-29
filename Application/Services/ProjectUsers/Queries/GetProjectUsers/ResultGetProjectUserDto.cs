namespace Application.Services.ProjectUsers.Queries.GetProjectUsers
{
    public class ResultGetProjectUserDto
    {
        public required List<GetProjectUserDto> ProjectUsers { get; set; }
        public long Rows { get; set; }
    }
}
