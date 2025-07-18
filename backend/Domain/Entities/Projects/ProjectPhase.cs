﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Projects
{
    public class ProjectPhase
    {
        public long ProjectPhaseId {  get; set; }
        public long ProjectId {  get; set; }
        public Project Projects { get; set; }
        public ICollection<ProjectPhaseTask> ProjectPhaseTasks { get; set; }

        public long ProjectTeamId {  get; set; }
        public long Duration {  get; set; }
        public long Price {  get; set; }
        public required string CreateDate { get; set; }
        public required string DeadLine { get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
    }
}
