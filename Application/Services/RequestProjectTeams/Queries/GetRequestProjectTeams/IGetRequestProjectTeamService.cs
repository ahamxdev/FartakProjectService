using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams
{
    public interface IGetRequestProjectTeamService
    {
        ResultGetRequestProjectTeamDto GetById(RequestGetRequestProjectTeamByIdDto request);
        ResultGetRequestProjectTeamDto GetByProjectId(RequestGetRequestProjectTeamByProjectIdDto request);
        ResultGetRequestProjectTeamDto GetByProjectIdAndAccept(RequestGetRequestProjectTeamByProjectIdDto request);
        ResultGetRequestProjectTeamDto GetAll();
    }
}
