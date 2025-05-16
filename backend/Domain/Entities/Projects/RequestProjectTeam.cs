using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Projects
{
    public class RequestProjectTeam
    {
        public long RequestProjectTeamId {  get; set; }
        public long ProjectTeamId { get; set; }
        public long ProjectId {  get; set; }
        public long Price {  get; set; }
        public long Days {  get; set; }
        public int Status { get; set; } // 0 Wait , 1 Reject , 2 Accept
    }
}
