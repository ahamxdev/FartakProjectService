using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities.Blogs;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Blogs.Commands.AddBlog
{
    public class AddBlogService : IAddBlogService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddBlogService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddBlogDto> Execute(RequestUploadAddBlogDto request)
        {

            try
            {

                var uploadsRootFolderImage = _configuration["AppSettings:BlogImageAddress"];



                var suffixImage = System.IO.Path.GetExtension(request.FileImage.FileName);
                string tickImage = DateTime.Now.Ticks.ToString();
                string fileNameImage = tickImage + suffixImage;




                var uploadFile = new UploadFile();
                if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, fileNameImage))
                {

                    Blog blog = new Blog
                    {
                        Description = request.Description,
                        CreatedDate = request.CreatedDate,
                        CreatedTime = request.CreatedTime,
                        UpdateTime = request.UpdateTime,
                        Title = request.Title,
                        UpdateDate = request.UpdateDate,
                        Image = fileNameImage,

                    };


                    _context.SaveChanges();
                    return new ResultDto<ResultAddBlogDto>()
                    {
                        Data = new ResultAddBlogDto() { BlogId = blog.BlogId },
                        IsSuccess = true,
                        Message = "بلاگ با موفقیت ثبت شد",

                    };

                }
                else
                {

                    return new ResultDto<ResultAddBlogDto>()
                    {
                        Data = new ResultAddBlogDto() { BlogId = 0, },
                        IsSuccess = false,
                        Message = "آپلود با خطا مواجه شد",

                    };

                }

            }
            catch
            {
                return new ResultDto<ResultAddBlogDto>()
                {
                    Data = new ResultAddBlogDto() { BlogId = 0, },
                    IsSuccess = false,
                    Message = "ثبت فایل بلاگ با خطا مواجه شد",

                };

            }
        }

    }
}
