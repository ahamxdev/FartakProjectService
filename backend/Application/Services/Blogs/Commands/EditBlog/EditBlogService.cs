using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Common.FileOperation.UploadFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Blogs.Commands.EditBlog
{
    public class EditBlogService : IEditBlogService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditBlogService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        public ResultDto Execute(RequestEditBlogDto request)
        {

            var blog = _context.Blogs.Find(request.BlogId);
            if (blog == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }



            try
            {

                if (request.FileImage != null)
                {
                    string name = "";
                    string suffix = "";

                    var uploadsRootFolderImage = _configuration["AppSettings:BlogImageAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileImage.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, name))
                    {



                        if (uploadsRootFolderImage != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;




                            string oldBlogImageAddress = blog.Image;
                            string addressOld = uploadsRootFolderImage + oldBlogImageAddress;
                            var deleteFile = new DeleteFile();
                            deleteFile.IsDeletedFile(addressOld);


                            blog.Image = name;


                        }
                    }

                    else
                    {

                        return new ResultDto
                        {
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد"
                        };

                    }
                }



                blog.Title = request.Title;
                blog.Description = request.Description;
                blog.UpdateDate = request.UpdateDate;
                blog.UpdateTime = request.UpdateTime;



                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }
        }



    }
}
