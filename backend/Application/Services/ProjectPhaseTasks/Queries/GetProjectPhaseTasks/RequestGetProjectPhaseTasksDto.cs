using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhaseTasks.Queries.GetProjectPhaseTask
{
    public class RequestGetProjectPhaseTaskByIdDto
    {
        public long ProjectPhaseTaskId { get; set; }

    }


    public class RequestGetProjectPhaseTaskByProjectIdDto
    {
        public long ProjectId { get; set; }

    }

    public class RequestGetProgressPercentByIdDto
    {
        public long OwnerId { get; set; }
        public long ProjectId { get; set; }


    }

    public class RequestGetProjectPhaseTaskByProjectTeamIdDto
    {
        public long ProjectTeamId { get; set; }

    }

}
