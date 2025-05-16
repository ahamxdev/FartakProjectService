namespace Application.Services.Users.Commands.EditUsers
{
    public class ResultEditUserDto
    {
        public long UserId { get; set; }
        public required string Verify { get; set; }
    }

    public class ResultEditTwoFA
    {
        public required string Mobile { get; set; }
        public long GenerateCode { get; set; }
    }

    public class ResultEditForgetPasseordDto
    {
        public long UserId { get; set; }
        public required string PassWord { get; set; }
    }
}
