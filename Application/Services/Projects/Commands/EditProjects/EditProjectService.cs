using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Common.FileOperation.UploadFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Projects.Commands.EditProjects
{
    public class EditProjectService : IEditProjectService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectDto request)
        {

            var project = _context.Projects.Find(request.ProjectId);
            if (project == null)
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

                    var uploadsRootFolderImage = _configuration["AppSettings:ProjectImageAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileImage.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, name))
                    {



                        if (uploadsRootFolderImage != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;

                            if (project.Image != null && project.Image.Length > 0)
                            {

                                string oldProjectImageAddress = project.Image;
                                string addressOld = uploadsRootFolderImage + oldProjectImageAddress;
                                var deleteFile = new DeleteFile();
                                deleteFile.IsDeletedFile(addressOld);

                            }




                            project.Image = name;


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

                else {

                    project.Image = null;

                }

                project.ProjectTypeId = request.ProjectTypeId;
                project.Description = request.Description;
                project.Title = request.Title;
                project.OwnerId = request.OwnerId;
                project.Price = request.Price;
                project.Duration = request.Duration;


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
