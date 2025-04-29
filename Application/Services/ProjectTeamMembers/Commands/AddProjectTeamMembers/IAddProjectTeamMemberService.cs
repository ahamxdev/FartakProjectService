using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectTeamMembers.Commands.AddProjectTeamMembers
{
    public interface IAddProjectTeamMemberService
    {
        ResultDto<ResultAddProjectTeamMemberDto> Execute(RequestAddProjectTeamMemberDto request);
    }
}
