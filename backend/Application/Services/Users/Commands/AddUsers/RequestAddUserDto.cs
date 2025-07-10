using Domain.Entities.Users;
using System.ComponentModel.DataAnnotations;

namespace Application.Services.Users.Commands.AddUsers
{
    public class RequestAddUserDto
    {
        public required string Name { get; set; }
        public required string Lastname { get; set; }
        public required string PassWord { get; set; }
        public required string Salt { get; set; }
        public required string Mobile { get; set; }
        public string? Email { get; set; }
        public string? Verify { get; set; }
        public int Status { get; set; } // 0 Active 1 Deactive
        public int Kind { get; set; } // 0 Admin , 1 User , 2 Teacher , 3 Owner
    }
    public class RequestRegisterUserDto
    {
        public required string Name { get; set; }
        public required string Lastname { get; set; }
        public required string PassWord { get; set; }
        public required string Salt { get; set; }
        public required string Mobile { get; set; }
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string? Email { get; set; }
        public string? Verify { get; set; }
        public int Status { get; set; } // 0 Active 1 Deactive
        public UserRoles Kind { get; set; } 
    }
}