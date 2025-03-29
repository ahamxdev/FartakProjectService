using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectTeamMembers.Commands.RemoveProjectTeamMembers
{
    public interface IRemoveProjectTeamMemberService
    {
        ResultDto Execute(RequestRemoveProjectTeamMemberDto request);
    }
}
