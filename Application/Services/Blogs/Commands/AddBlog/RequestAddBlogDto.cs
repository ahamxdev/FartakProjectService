using Application.Services.BlogContents.Commands.AddBlogContent;
using Microsoft.AspNetCore.Http;

namespace Application.Services.Blogs.Commands.AddBlog
{
    public class RequestUploadAddBlogDto
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string CreatedDate { get; set; }
        public required string CreatedTime { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }
        public required IFormFile FileImage { get; set; }
        public required List<RequestUploadAddBlogContentDto> BlogContents { get; set; }

    }
}
