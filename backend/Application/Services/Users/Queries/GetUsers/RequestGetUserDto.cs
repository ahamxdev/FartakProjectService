using System.ComponentModel.DataAnnotations;

namespace Application.Services.Users.Queries.GetUsers
{
    public class RequestGetUserByIdDto
    {
        public long UserId { get; set; }
    }


    public class RequestGetUserByKindDto
    {
        public int Kind { get; set; }
    }

    public class RequestGetUserByNameDto
    {
        public required string FullName { get; set; }
    }

    public class RequestGetUserByMobileDto
    {
        public required string Mobile { get; set; }
    }

    public class RequestGetUserByMobilePasswordDto
    {
        public required string Mobile { get; set; }
        public required string Password { get; set; }
    }
    public class RequestGetUserByEmailPasswordDto
    {
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}