using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams
{
    public class GetRequestProjectTeamDto
    {
        public long RequestProjectTeamId { get; set; }
        public long ProjectTeamId { get; set; }
        public long ProjectId { get; set; }
        public int Status { get; set; } // 0 Wait , 1 Reject , 2 Accept
    }
}
