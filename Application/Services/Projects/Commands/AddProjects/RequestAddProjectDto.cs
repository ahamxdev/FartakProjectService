using Microsoft.AspNetCore.Http;

namespace Application.Services.Projects.Commands.AddProjects
{
    public class RequestAddProjectDto
    {
        public long ProjectTypeId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long OwnerId { get; set; }
        public long Duration { get; set; }
        public long Price { get; set; }

        public IFormFile? FileImage { get; set; }
        public required string CreateDate { get; set; }
        public required string DeadLine { get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
    }
}
