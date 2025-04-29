namespace Application.Services.Users.Commands.AddUsers
{
    public class ResultAddUserDto
    {
        public long UserId { get; set; }
        public string? Verify { get; set; }
        public int Kind { get; set; }
    }
}
