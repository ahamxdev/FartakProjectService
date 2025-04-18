using Microsoft.AspNetCore.Http;

namespace Application.Services.Projects.Commands.EditProjects
{
    public class RequestEditProjectDto
    {
        public long ProjectId { get; set; }
        public long ProjectTypeId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long OwnerId { get; set; }
        public long Duration { get; set; }
        public long FinishPrice { get; set; }
        public long StartPrice { get; set; }
        public long EndPrice { get; set; }
        public required string DeadLine { get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
        public IFormFile? FileImage { get; set; }
    }
}
