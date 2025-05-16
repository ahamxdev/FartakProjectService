using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectTeams.Commands.AddProjectTeams
{
    public interface IAddProjectTeamService
    {
        ResultDto<ResultAddProjectTeamDto> Execute(RequestAddProjectTeamDto request);
    }
}
