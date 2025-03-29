using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Services.TeacherTypes.Queries.GetTeacherTypes;

namespace Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams
{
    public class ResultGetRequestProjectTeamDto
    {
        public required List<GetRequestProjectTeamDto> RequestProjectTeams { get; set; }
        public long Rows { get; set; }
    }
}
