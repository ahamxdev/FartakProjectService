using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectFiles.Commands.AddProjectFiles
{
    public interface IAddProjectFileService
    {
        ResultDto<ResultAddProjectFileDto> Execute(RequestAddProjectFileDto request);
    }
}
