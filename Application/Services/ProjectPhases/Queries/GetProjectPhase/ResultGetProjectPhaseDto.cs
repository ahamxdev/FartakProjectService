using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhases.Queries.GetProjectPhase
{
    public class ResultGetProjectPhaseDto
    {
        public required List<GetProjectPhaseDto> ProjectPhases { get; set; }
        public long Rows { get; set; }
    }
}
