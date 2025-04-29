using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Services.RequestProjectTeams.Commands.RemoveRequestProjectTeam;
using Common.Dto;

namespace Application.Services.RequestProjectTeams.Commands.RemoveRequestProjectTeams
{
    public interface IRemoveRequestProjectTeamService
    {
        ResultDto Execute(RequestRemoveRequestProjectTeamDto request);
    }
}
