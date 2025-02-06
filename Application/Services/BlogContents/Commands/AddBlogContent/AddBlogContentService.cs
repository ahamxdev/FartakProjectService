using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities.Blogs;
using Microsoft.Extensions.Configuration;

namespace Application.Services.BlogContents.Commands.AddBlogContent
{
    public class AddBlogContentService : IAddBlogContentService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddBlogContentService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddBlogContentDto> Execute(RequestUploadAddBlogContentDto request)
        {

            try
            {

                string fileNameImage = "";

                if (request.FileImage != null)
                {

                    var uploadsRootFolderImage = _configuration["AppSettings:BlogContentImageAddress"];
                    var suffixImage = System.IO.Path.GetExtension(request.FileImage.FileName);
                    string tickImage = DateTime.Now.Ticks.ToString();
                    fileNameImage = tickImage + suffixImage;


                    var uploadFile = new UploadFile();
                    if (!uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, fileNameImage))
                    {
                        return new ResultDto<ResultAddBlogContentDto>()
                        {
                            Data = new ResultAddBlogContentDto() { BlogContentId = 0, },
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد",

                        };

                    }

                }

                BlogContent blogContent = new BlogContent
                {
                    Description = request.Description,
                    CreatedDate = request.CreatedDate,
                    CreatedTime = request.CreatedTime,
                    UpdateTime = request.UpdateTime,
                    BlogId = request.BlogId,
                    Title = request.Title,
                    UpdateDate = request.UpdateDate,
                    Image = fileNameImage,

                };
                _context.BlogContents.Add(blogContent);
                _context.SaveChanges();

                return new ResultDto<ResultAddBlogContentDto>()
                {
                    Data = new ResultAddBlogContentDto() { BlogContentId = blogContent.BlogContentId },
                    IsSuccess = true,
                    Message = "محتوای بلاگ با موفقیت ثبت شد",

                };

            }
            catch
            {
                return new ResultDto<ResultAddBlogContentDto>()
                {
                    Data = new ResultAddBlogContentDto() { BlogContentId = 0, },
                    IsSuccess = false,
                    Message = "ثبت فایل بلاگ با خطا مواجه شد",

                };

            }
        }
    }
}
