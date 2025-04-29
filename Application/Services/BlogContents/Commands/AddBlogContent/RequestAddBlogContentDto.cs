using Microsoft.AspNetCore.Http;

namespace Application.Services.BlogContents.Commands.AddBlogContent
{
    public class RequestUploadAddBlogContentDto
    {
        public long BlogId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string CreatedDate { get; set; }
        public required string CreatedTime { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }

        public IFormFile? FileImage { get; set; }
    }
}
