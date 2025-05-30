﻿using Microsoft.AspNetCore.Http;

namespace Application.Services.TeacherUsers.Commands.AddTeacherUsers
{
    public class RequestAddTeacherUserDto
    {
        public long UserId { get; set; }
        public required string Description { get; set; }
        public int Gender { get; set; } // 1 male 2 female 3 both
        public required string City { get; set; }
        public int TypeTeaching { get; set; } // 0 Online 1 InPerson
        public long OnlinePrice { get; set; }
        public long TeacherTypeId { get; set; }
        public long InPersonPrice { get; set; }
        public int LanguageTeach { get; set; } // 0 Farsi 1 English
        public int Place { get; set; } //0Iran 1 Other
        public int OurSelect { get; set; } // 0 Not in fartak , 1 yes
        public IFormFile? FileVideo { get; set; }
        public IFormFile? FileImage { get; set; }
        public int AllowUploadCourse { get; set; }
        public long Duration { get; set; }
        public int PercentOff { get; set; }
        public int MaxUser { get; set; }
    }
}
