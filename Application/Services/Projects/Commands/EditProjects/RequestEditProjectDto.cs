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
        public long Price { get; set; }
        public IFormFile? FileImage { get; set; }
    }
}
