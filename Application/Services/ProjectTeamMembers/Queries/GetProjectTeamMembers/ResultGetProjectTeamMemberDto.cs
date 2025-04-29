using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Services.ProjectTeams.Queries.GetProjectTeams;

namespace Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers
{
    public class ResultGetProjectTeamMemberDto
    {
        public required List<GetProjectTeamMemberDto> ProjectTeamMembers { get; set; }
        public long Rows { get; set; }
    }
}
