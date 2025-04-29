using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.ProjectTeamMembers.Commands.EditProjectTeamMembers
{
    public interface IEditProjectTeamMemberService
    {
        ResultDto Execute(RequestEditProjectTeamMemberDto request);
    }
}
