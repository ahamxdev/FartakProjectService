using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers
{
    public  class ResultGetProjectTeamHeadDto
    {
        public required List<GetProjectTeamHeadDto> ProjectTeamMembers { get; set; }
        public long Rows { get; set; }
    }
}
