using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams
{
    public class RequestGetRequestProjectTeamByIdDto
    {
        public long RequestProjectTeamId { get; set; }
    }

    public class RequestGetRequestProjectTeamByProjectTeamIdDto
    {
        public long ProjectTeamId { get; set; }
    }


    public class RequestGetRequestProjectTeamByProjectIdDto
    {
        public long ProjectId { get; set; }
    }

}
