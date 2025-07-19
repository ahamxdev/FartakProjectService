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
        public MaritalStatus? MaritalStatus { get; set; }
        public Gender? Gender { get; set; }
        public string? Language { get; set; }
        public string? City { get; set; }
        public double? Latitude { get; set; }   // عرض جغرافیایی (مثلاً 35.6892)
        public double? Longitude { get; set; }  // طول جغرافیایی (مثلاً 51.3890)
        public string? ProjectSkillJson { get; set; }

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
    public enum MaritalStatus
    {
        Single,
        Married
    }

    public enum Gender
    {
        Male,
        Female
    }

    

}