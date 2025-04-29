using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Application.Services.ProjectFiles.Commands.AddProjectFiles
{
    public class RequestAddProjectFileDto
    {
        public required List<RequestProjectFilesDto> ProjectFiles {  get; set; }
    }


    public class RequestProjectFilesDto
    {
        public required IFormFile File { get; set; }
        public long ProjectId { get; set; }
        public int OwnerAtach { get; set; } // 0 FreeLancer 1 Owner
    }

}
