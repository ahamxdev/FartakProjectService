namespace Domain.Entities.Users
{
    public class User
    {
        public long UserId { get; set; }
        public required string PassWord { get; set; }
        public required string Name { get; set; }
        public required string Lastname { get; set; }
        public required string Salt { get; set; }
        public required string Mobile { get; set; }
        public string? Email { get; set; }
        public string? Verify { get; set; }
        public int Status { get; set; } // 0 Active 1 Deactive 
        public int Kind { get; set; } // 0 Admin , 1 User , 2 Teacher , 3 Owner, 4 Freelancer
    }

}