using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectTeams.Queries.GetProjectTeams
{
    public interface IGetProjectTeamService
    {
        ResultGetProjectTeamDto GetAll();
        ResultGetProjectTeamDto GetByProjectTypeId(RequestGetProjectTeamByProjectTypeIdDto request);
        ResultGetProjectTeamDto GetById(RequestGetProjectTeamByIdDto request);
    }
}
