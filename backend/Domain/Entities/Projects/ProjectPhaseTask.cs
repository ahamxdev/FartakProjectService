namespace Domain.Entities.Projects
{
    public class ProjectPhaseTask
    {
        public long ProjectPhaseTaskId { get; set; }

        public long ProjectPhaseId { get; set; }
        public ProjectPhase ProjectPhases { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CreateDate { get; set; }
        public string DeadLine { get; set; }
        public long? Price { get; set; }
        public long Duration { get; set; }
        public int? Participation { get; set; }
        public int? Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
    }
}
