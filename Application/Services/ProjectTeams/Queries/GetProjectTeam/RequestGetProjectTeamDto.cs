using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectTeams.Queries.GetProjectTeams
{
    public class RequestGetProjectTeamByIdDto
    {
        public long ProjectTeamId {  get; set; }
    } 
    
    public class RequestGetProjectTeamByProjectTypeIdDto
    {
        public long ProjectTypeId {  get; set; }
    }
}
