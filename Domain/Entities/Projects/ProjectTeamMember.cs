using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Projects
{
    public class ProjectTeamMember
    {
        public long ProjectTeamMemberId { get; set; } 
        public long ProjectTeamId { get; set; } 
        public long MemberId {  get; set; }
        public int IsHead {  get; set; } // 0 No 1 Yes

    }
}
