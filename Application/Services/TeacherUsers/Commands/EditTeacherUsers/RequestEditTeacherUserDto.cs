using Microsoft.AspNetCore.Http;

namespace Application.Services.TeacherUsers.Commands.EditTeacherUsers
{
    public class RequestEditTeacherUserDto
    {
        public long TeacherUserId { get; set; }
        public long UserId { get; set; }
        public required string Description { get; set; }
        public int Gender { get; set; } // 1 male 2 female 3 both
        public required string City { get; set; }
        public int TypeTeaching { get; set; } // 0 Online 1 InPerson
        public long OnlinePrice { get; set; }
        public long TeacherTypeId { get; set; }
        public long InPersonPrice { get; set; }
        public required IFormFile FileVideo { get; set; }
        public required IFormFile FileImage { get; set; }
    }
}
