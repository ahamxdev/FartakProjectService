using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectPhases.Commands.RemoveProjectPhase
{
    public interface IRemoveProjectPhaseService
    {
        ResultDto Execute(RequestRemoveProjectPhaseDto request);
    }
}
