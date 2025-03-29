using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.RequestProjectTeams.Commands.AddRequestProjectTeams
{
    public interface IAddRequestProjectTeamService
    {
        ResultDto<ResultAddRequestProjectTeamDto> Execute(RequestAddRequestProjectTeamDto request);
    }
}
