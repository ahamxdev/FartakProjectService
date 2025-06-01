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
}