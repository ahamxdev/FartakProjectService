using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.BlogContents.Commands.RemoveBlogContent
{
    public class RemoveBlogContentService : IRemoveBlogContentService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveBlogContentService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;

        }


        public ResultDto Delete(RequestRemoveBlogContentDto request)
        {

            var blogContent = _context.BlogContents.Find(request.BlogContentId);
            if (blogContent == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            var BlogImageAddress = _configuration["AppSettings:BlogContentImageAddress"];

            if (BlogImageAddress != null)
            {
                string oldBlogImageAddress = blogContent.Image;
                string addressOld = BlogImageAddress + oldBlogImageAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }


            _context.BlogContents.Remove(blogContent);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }


        public ResultDto DeleteByBlogId(RequestRemoveBlogContentByBlogIdDto request)
        {

            var blogContents = _context.BlogContents.Where(b => b.BlogId == request.BlogId);
            if (blogContents.Count() == 0)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            var BlogImageAddress = _configuration["AppSettings:BlogContentImageAddress"];


            foreach (var blogContent in blogContents)
            {
                if (BlogImageAddress != null)
                {
                    string oldBlogImageAddress = blogContent.Image;
                    string addressOld = BlogImageAddress + oldBlogImageAddress;
                    var deleteFile = new DeleteFile();
                    deleteFile.IsDeletedFile(addressOld);

                }
            }




            _context.BlogContents.RemoveRange(blogContents);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }

    }
}
