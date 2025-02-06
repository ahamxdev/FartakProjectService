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
        public string? Verify { get; set; }
        public int Status { get; set; } // 0 Active 1 Deactive
        public int Kind { get; set; } // 0 Admin , 1 User , 2 Teacher , 3 Owner
    }

    public class RequestEditUserForgetPasswordDto
    {
        public required string Mobile { get; set; }
    }


    public class RequestChangeUserPasswordDto
    {
        public long UserId { get; set; }
        public required string OldPassword { get; set; }
        public required string NewPassWord { get; set; }

    }

}
