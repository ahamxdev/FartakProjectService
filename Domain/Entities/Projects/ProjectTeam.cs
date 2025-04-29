using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Projects
{
    public class ProjectTeam
    {
        public long ProjectTeamId {  get; set; }
        public required string TeamName {  get; set; }
        public string? TeamDescription { get; set; }
        public long ProjectTypeId {  get; set; }
    }
}
