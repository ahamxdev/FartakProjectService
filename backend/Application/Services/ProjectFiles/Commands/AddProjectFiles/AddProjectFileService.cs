using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectFiles.Commands.AddProjectFiles
{
    public class AddProjectFileService : IAddProjectFileService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public AddProjectFileService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public ResultDto<ResultAddProjectFileDto> Execute(RequestAddProjectFileDto request)
        {
            try
            {
                List<long> projectFileIds = new List<long>();
                foreach (var item in request.ProjectFiles)
                {
                    var uploadsRootFolderImage = _configuration["AppSettings:ProjectFilesAddress"];


                    string fileNameImage = "";


                    var suffixImage = System.IO.Path.GetExtension(item.File.FileName);
                    string tickImage = DateTime.Now.Ticks.ToString();
                    fileNameImage = tickImage + suffixImage;


                    var uploadFile = new UploadFile();

                    if (uploadFile.IsUploadedFile(item.File, uploadsRootFolderImage, fileNameImage))
                    {
                        ProjectFile ProjectFile = new ProjectFile
                        {
                            FileAddress = fileNameImage,
                            OwnerAtach = item.OwnerAtach,
                            ProjectId = item.ProjectId,
                        };
                        _context.ProjectFiles.Add(ProjectFile);
                        _context.SaveChanges();

                        projectFileIds.Add(ProjectFile.ProjectFileId);

                        return new ResultDto<ResultAddProjectFileDto>
                        {
                            Data = new ResultAddProjectFileDto
                            {
                                ProjectFileIds = projectFileIds
                            },
                            IsSuccess = true,
                            Message = "با موفقیت ثبت شد."
                        };
                    }
                    else
                    {
                        return new ResultDto<ResultAddProjectFileDto>()
                        {
                            Data = new ResultAddProjectFileDto() { ProjectFileIds = projectFileIds },
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد",
                        };
                    }
                }

                return new ResultDto<ResultAddProjectFileDto>()
                {
                    Data = new ResultAddProjectFileDto() { ProjectFileIds = projectFileIds },
                    IsSuccess = false,
                    Message = "فایلی وجود ندارد",
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectFileDto>
                {
                    Data = new ResultAddProjectFileDto { ProjectFileIds = new() },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };
            }
        }
    }
}