using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUsers;

namespace Application.Services.ProjectFiles.Queries.GetProjectFiles
{
    public class GetProjectFileService : IGetProjectFileService
    {
        private readonly IDatabaseContext _context;
        private readonly IGetUserService _getUserService;
        public GetProjectFileService(IDatabaseContext context, IGetUserService getUserService)
        {
            _context = context;
            _getUserService = getUserService;
        }
        public ResultGetProjectFileDto GetAll()
        {
            var ProjectFile = _context.ProjectFiles;
            var ProjectFileList = ProjectFile.Select(p => new GetProjectFileDto
            {
                FileAddress = p.FileAddress,
                ProjectFileId = p.ProjectFileId,
                ProjectId = p.ProjectId,
                OwnerAtach = p.OwnerAtach,

            }).OrderBy(x => x.ProjectFileId).ToList();
            return new ResultGetProjectFileDto
            {
                ProjectFiles = ProjectFileList,
                Rows = ProjectFileList.Count,
            };

        }



        public ResultGetProjectFileDto GetById(RequestGetProjectFileByIdDto request)
        {
            var ProjectFile = _context.ProjectFiles.Where(x => x.ProjectFileId == request.ProjectFileId);
            var ProjectFileList = ProjectFile.Select(p => new GetProjectFileDto
            {
               FileAddress = p.FileAddress,
               ProjectFileId= p.ProjectFileId,
               ProjectId=p.ProjectId,
               OwnerAtach=p.OwnerAtach,

            }).OrderBy(x => x.ProjectFileId).ToList();
            return new ResultGetProjectFileDto
            {
                ProjectFiles = ProjectFileList,
                Rows = ProjectFileList.Count,
            };

        }



        public ResultGetProjectFileDto GetByProjectId(RequestGetProjectFileByProjectIdDto request)
        {
            var ProjectFile = _context.ProjectFiles.Where(x => x.ProjectId == request.ProjectId);
            var ProjectFileList = ProjectFile.Select(p => new GetProjectFileDto
            {
                FileAddress = p.FileAddress,
                ProjectFileId = p.ProjectFileId,
                ProjectId = p.ProjectId,
                OwnerAtach = p.OwnerAtach,

            }).OrderBy(x => x.ProjectFileId).ToList();
            return new ResultGetProjectFileDto
            {
                ProjectFiles = ProjectFileList,
                Rows = ProjectFileList.Count,
            };

        }


    }

}
