using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhases.Commands.AddProjectPhase
{
    public class RequestAddProjectPhaseDto
    {
        public long ProjectId { get; set; }
        public long ProjectTeamId { get; set; }
        public long Duration { get; set; }
        public long Price { get; set; }
        public required string CreateDate { get; set; }
        public required string DeadLine { get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
    }
}
