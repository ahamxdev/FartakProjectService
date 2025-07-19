using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectPhaseTasks.Commands.AddProjectPhaseTask
{
    public interface IAddProjectPhaseTaskService
    {
        ResultDto<ResultAddProjectPhaseTaskDto> Execute(RequestAddProjectPhaseTaskDto request);
    }
}
