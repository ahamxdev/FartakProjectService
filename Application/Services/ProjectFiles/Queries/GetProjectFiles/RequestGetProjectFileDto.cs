using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectFiles.Queries.GetProjectFiles
{
    public class RequestGetProjectFileByIdDto
    {
        public long ProjectFileId {  get; set; }
    }


    public class RequestGetProjectFileByProjectIdDto
    {
       public long ProjectId { get; set; }
    }
}
