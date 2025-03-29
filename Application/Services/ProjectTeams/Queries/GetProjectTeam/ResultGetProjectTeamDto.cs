using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Services.ProjectTeams.Queries.GetProjectTeams;

namespace Application.Services.ProjectTeams.Queries.GetProjectTeams
{
    public class ResultGetProjectTeamDto
    {
        public required List<GetProjectTeamDto> ProjectTeams { get; set; }
        public long Rows { get; set; }
    }
}
