using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers
{
    public class RequestGetProjectTeamMemberByIdDto
    {
        public long ProjectTeamMemberId { get; set; }
    }

    public class RequestGetProjectTeamMemberByProjectTeamIdDto
    {
        public long ProjectTeamId { get; set; }
    }


}
