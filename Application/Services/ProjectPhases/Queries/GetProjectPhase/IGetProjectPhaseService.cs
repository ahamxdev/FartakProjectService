using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhases.Queries.GetProjectPhase
{
    public interface IGetProjectPhaseService
    {
        ResultGetProjectPhaseDto GetById(RequestGetProjectPhaseByIdDto request);
        ResultGetProjectPhaseDto GetByProjectId(RequestGetProjectPhaseByProjectIdDto request);
        ResultGetProjectPhaseDto GetByProjectTeamId(RequestGetProjectPhaseByProjectTeamIdDto request);
        ResultGetProjectPhaseDto GetAll();
    }
}
