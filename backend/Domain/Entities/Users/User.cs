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
        public int Status { get; set; } // 1 Active 0 Deactive 
        public int Kind { get; set; } // user role
    }

    // user roles
    public enum UserRoles
    {
        Master = 0,
        Student = 1,
        Admin1 = 2,
        Admin2 = 3,
        Freelancer = 4,
        Employer = 5,
        ProjectManager = 6,
        SuperAdmin = 7,
    }
}