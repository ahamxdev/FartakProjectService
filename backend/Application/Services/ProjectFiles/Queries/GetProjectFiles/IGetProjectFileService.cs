using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectFiles.Queries.GetProjectFiles
{
    public interface IGetProjectFileService
    {
        ResultGetProjectFileDto GetByProjectId(RequestGetProjectFileByProjectIdDto request);
        ResultGetProjectFileDto GetById(RequestGetProjectFileByIdDto request);
        ResultGetProjectFileDto GetAll();
    }
}
