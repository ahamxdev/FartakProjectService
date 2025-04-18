namespace Domain.Entities
{
    public class Course
    {
        public long CourseId { get; set; }
        public long CourseTypeId { get; set; }
        public long TeacherId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long Price { get; set; }
        public int status { get; set; } //0 Waiting , 1 Accept , 2 Reject
        public required string VideoName { get; set; }
        public long Duration { get; set; }
        public int PercentOff { get; set; }

    }
}
