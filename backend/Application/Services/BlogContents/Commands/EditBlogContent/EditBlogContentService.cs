using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Common.FileOperation.UploadFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.BlogContents.Commands.EditBlogContent
{
    public class EditBlogContentService : IEditBlogContentService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditBlogContentService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        public ResultDto Execute(RequestEditBlogContentDto request)
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


            try
            {

                if (request.FileImage != null)
                {
                    string name = "";
                    string suffix = "";

                    var uploadsRootFolderImage = _configuration["AppSettings:BlogContentImageAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileImage.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, name))
                    {



                        if (uploadsRootFolderImage != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;


                            if (blogContent.Image != null)
                            {
                                string oldBlogImageAddress = blogContent.Image;
                                string addressOld = uploadsRootFolderImage + oldBlogImageAddress;
                                var deleteFile = new DeleteFile();
                                deleteFile.IsDeletedFile(addressOld);
                            }


                            blogContent.Image = name;


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


                blogContent.BlogId = request.BlogId;
                blogContent.Title = request.Title;
                blogContent.Description = request.Description;
                blogContent.UpdateDate = request.UpdateDate;
                blogContent.UpdateTime = request.UpdateTime;



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
