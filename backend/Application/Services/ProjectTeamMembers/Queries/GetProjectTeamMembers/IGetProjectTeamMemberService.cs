using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers
{
    public interface IGetProjectTeamMemberService
    {
        ResultGetProjectTeamMemberDto GetById(RequestGetProjectTeamMemberByIdDto request);
        ResultGetProjectTeamMemberDto GetByProjectTeamId(RequestGetProjectTeamMemberByProjectTeamIdDto request);
        ResultGetProjectTeamMemberDto GetAll();
        ResultGetProjectTeamHeadDto GetAllHead();
    }
}
