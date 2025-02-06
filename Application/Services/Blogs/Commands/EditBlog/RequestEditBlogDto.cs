using Application.Services.BlogContents.Commands.AddBlogContent;
using Microsoft.AspNetCore.Http;

namespace Application.Services.Blogs.Commands.EditBlog
{
    public class RequestEditBlogDto
    {
        public long BlogId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string UpdateDate { get; set; }
        public required string UpdateTime { get; set; }

        public IFormFile? FileImage { get; set; }
        public required List<RequestUploadAddBlogContentDto> BlogContents { get; set; }
    }



}
