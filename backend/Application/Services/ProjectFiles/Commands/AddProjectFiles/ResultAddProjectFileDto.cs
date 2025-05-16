using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectFiles.Commands.AddProjectFiles
{
    public class ResultAddProjectFileDto
    {
        public required List <long> ProjectFileIds { get; set; }
    }
}
