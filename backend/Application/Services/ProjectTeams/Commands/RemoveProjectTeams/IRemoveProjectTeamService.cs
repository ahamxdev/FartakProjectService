using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectTeams.Commands.RemoveProjectTeams
{
    public interface IRemoveProjectTeamService
    {
        ResultDto Execute(RequestRemoveProjectTeamDto request);
    }
}
