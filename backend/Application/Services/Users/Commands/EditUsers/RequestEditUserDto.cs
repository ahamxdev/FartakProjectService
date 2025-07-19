using Domain.Entities.Users;

namespace Application.Services.Users.Commands.EditUsers
{

    public class RequestEditUserDto
    {
        public long UserId { get; set; }
        public required string Name { get; set; }
        public required string Lastname { get; set; }
        public required string Password { get; set; }
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
        public int Status { get; set; } // 0 Active 1 Deactive
        public int Kind { get; set; } // 0 Admin , 1 User , 2 Teacher , 3 Owner
    }

    public class RequestEditUserForgetPasswordDto
    {
        public required string Mobile { get; set; }
    }
    public class RequestEditUserOtpConfirmDto
    {
        public required string Mobile { get; set; }
        public string? OtpCode { get; set; }
    }

    public class RequestChangeUserPasswordDto
    {
        public required string Mobile { get; set; }
        public required string OldPassword { get; set; }
        public required string NewPassWord { get; set; }

    }

}
