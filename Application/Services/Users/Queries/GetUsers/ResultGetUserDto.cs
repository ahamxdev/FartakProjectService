using Application.Services.Users.Queries.GetUser;

namespace Application.Services.Users.Queries.GetUsers
{
    public class ResultGetUserDto
    {
        public required List<GetUserDto> Users { get; set; }
        public long Rows { get; set; }
    }
}
