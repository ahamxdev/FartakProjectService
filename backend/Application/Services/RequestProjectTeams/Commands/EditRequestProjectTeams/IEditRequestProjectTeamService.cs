using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.RequestProjectTeams.Commands.EditRequestProjectTeams
{
    public interface IEditRequestProjectTeamService
    {
        ResultDto Execute(RequestEditRequestProjectTeamDto request);
    }
}
