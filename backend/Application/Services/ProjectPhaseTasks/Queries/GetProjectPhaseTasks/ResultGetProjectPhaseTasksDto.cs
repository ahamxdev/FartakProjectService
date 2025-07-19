using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhaseTasks.Queries.GetProjectPhaseTask
{
    public class ResultGetProjectPhaseTaskDto
    {
        public required List<GetProjectPhaseTaskDto> ProjectPhaseTasks { get; set; }
        public long Rows { get; set; }
    }
}
