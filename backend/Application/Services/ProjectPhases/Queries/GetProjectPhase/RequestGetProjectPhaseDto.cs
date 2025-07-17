using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhases.Queries.GetProjectPhase
{
    public class RequestGetProjectPhaseByIdDto
    {
        public long ProjectPhaseId {  get; set; }

    }


    public class RequestGetProjectPhaseByProjectIdDto
    {
        public long ProjectId { get; set; }

    }
    
    public class RequestGetProgressPercentByIdDto
    {
        public long OwnerId { get; set; }
        public long ProjectId { get; set; }
    

    }

    public class RequestGetProjectPhaseByProjectTeamIdDto
    {
        public long ProjectTeamId { get; set; }

    }

}
