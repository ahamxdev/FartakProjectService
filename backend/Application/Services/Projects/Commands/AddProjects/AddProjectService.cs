using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Projects.Commands.AddProjects
{
    public class AddProjectService : IAddProjectService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectDto> Execute(RequestAddProjectDto request)
        {
            try
            {
                var uploadsRootFolderImage = _configuration["AppSettings:ProjectImageAddress"];


                string fileNameImage = "";


                if (request.FileImage != null)
                {

                    var suffixImage = System.IO.Path.GetExtension(request.FileImage.FileName);
                    string tickImage = DateTime.Now.Ticks.ToString();
                    fileNameImage = tickImage + suffixImage;


                    var uploadFile = new UploadFile();

                    if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, fileNameImage))
                    {
                        Project project = new Project
                        {

                            Description = request.Description,
                            OwnerId = request.OwnerId,
                            FinishPrice = request.FinishPrice,
                            StartPrice = request.StartPrice,
                            EndPrice = request.EndPrice,
                            ProjectCategoryId = request.ProjectCategoryId,
                            ProjectSkillId = request.ProjectSkillId,
                            Title = request.Title,
                            Duration = request.Duration,
                            CreateDate=request.CreateDate,
                            DeadLine = request.DeadLine,
                            Status = request.Status,
                            Priority = request.Priority,
                            PriceType = request.PriceType,
                            Image = fileNameImage

                        };
                        _context.Projects.Add(project);
                        _context.SaveChanges();
                        return new ResultDto<ResultAddProjectDto>
                        {
                            Data = new ResultAddProjectDto
                            {
                                ProjectId = project.ProjectId
                            },
                            IsSuccess = true,
                            Message = "با موفقیت ثبت شد."
                        };
                    }
                    else
                    {
                        return new ResultDto<ResultAddProjectDto>()
                        {
                            Data = new ResultAddProjectDto() { ProjectId = 0, },
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد",

                        };
                    }
                }

                else
                {

                    Project project = new Project
                    {

                        Description = request.Description,
                        OwnerId = request.OwnerId,
                        FinishPrice = request.FinishPrice,
                        StartPrice = request.StartPrice,
                        EndPrice = request.EndPrice,
                        ProjectCategoryId = request.ProjectCategoryId,
                        ProjectSkillId = request.ProjectSkillId,
                        Title = request.Title,
                        Duration = request.Duration,
                        CreateDate = request.CreateDate,
                        DeadLine= request.DeadLine,
                        Status= request.Status,
                        Priority = request.Priority,
                        PriceType = request.PriceType,
                        Image = null

                    };
                    _context.Projects.Add(project);
                    _context.SaveChanges();
                    return new ResultDto<ResultAddProjectDto>
                    {
                        Data = new ResultAddProjectDto
                        {
                            ProjectId = project.ProjectId
                        },
                        IsSuccess = true,
                        Message = "با موفقیت ثبت شد."
                    };

                }





            }
            catch
            {
                return new ResultDto<ResultAddProjectDto>
                {
                    Data = new ResultAddProjectDto { ProjectId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
