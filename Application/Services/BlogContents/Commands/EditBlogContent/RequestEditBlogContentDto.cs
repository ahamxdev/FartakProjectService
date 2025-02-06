using Microsoft.AspNetCore.Http;

namespace Application.Services.BlogContents.Commands.EditBlogContent
{
    public class RequestEditBlogContentDto
    {
        public long BlogContentId { get; set; }
        public long BlogId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }

        public IFormFile? FileImage { get; set; }
    }
}
