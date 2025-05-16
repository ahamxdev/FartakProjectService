using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectPhases.Commands.AddProjectPhase
{
    public interface IAddProjectPhaseService
    {
        ResultDto<ResultAddProjectPhaseDto> Execute(RequestAddProjectPhaseDto request);
    }
}
