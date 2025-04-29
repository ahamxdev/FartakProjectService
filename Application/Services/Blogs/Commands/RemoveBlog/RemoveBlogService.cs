using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Blogs.Commands.RemoveBlog
{
    public class RemoveBlogService : IRemoveBlogService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveBlogService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;

        }


        public ResultDto Delete(RequestRemoveBlogDto request)
        {

            var Blog = _context.Blogs.Find(request.BlogId);
            if (Blog == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            var BlogImageAddress = _configuration["AppSettings:BlogImageAddress"];

            if (BlogImageAddress != null)
            {
                string oldBlogImageAddress = Blog.Image;
                string addressOld = BlogImageAddress + oldBlogImageAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }


            _context.Blogs.Remove(Blog);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }



    }
}
