using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;


namespace Application.Services.ProjectFiles.Commands.RemoveProjectFiles
{
    public class RemoveProjectFileService : IRemoveProjectFileService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveProjectFileService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public ResultDto Execute(RequestRemoveProjectFileDto request)
        {
            var ProjectFile = _context.ProjectFiles.Find(request.ProjectFileId);
            if (ProjectFile == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            var ProjectFileImageAddress = _configuration["AppSettings:ProjectFilesAddress"];




            if (ProjectFileImageAddress != null)
            {
                string oldProjectFileImageAddress = ProjectFile.FileAddress;
                string addressOld = ProjectFileImageAddress + oldProjectFileImageAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }

            _context.ProjectFiles.Remove(ProjectFile);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
