using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;


namespace Application.Services.Projects.Commands.RemoveProjects
{
    public class RemoveProjectService : IRemoveProjectService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveProjectService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public ResultDto Execute(RequestRemoveProjectDto request)
        {
            var Project = _context.Projects.Find(request.ProjectId);
            if (Project == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            var ProjectImageAddress = _configuration["AppSettings:ProjectContentImageAddress"];




            if (ProjectImageAddress != null)
            {
                string oldProjectImageAddress = Project.Image;
                string addressOld = ProjectImageAddress + oldProjectImageAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }

            _context.Projects.Remove(Project);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
