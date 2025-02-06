using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;


namespace Application.Services.TeacherUsers.Commands.RemoveTeacherUsers
{
    public class RemoveTeacherUserService : IRemoveTeacherUserService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveTeacherUserService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public ResultDto Execute(RequestRemoveTeacherUserDto request)
        {
            var TeacherUser = _context.TeacherUsers.Find(request.TeacherUserId);
            if (TeacherUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            var TeacherUserVideoAddress = _configuration["AppSettings:TeacherUserContentVideoAddress"];
            var TeacherUserImageAddress = _configuration["AppSettings:TeacherUserContentImageAddress"];

            if (TeacherUserVideoAddress != null)
            {
                string oldTeacherUserVideoAddress = TeacherUser.VideoName;
                string addressOld = TeacherUserVideoAddress + oldTeacherUserVideoAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }


            if (TeacherUserImageAddress != null)
            {
                string oldTeacherUserImageAddress = TeacherUser.ImageName;
                string addressOld = TeacherUserImageAddress + oldTeacherUserImageAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }

            _context.TeacherUsers.Remove(TeacherUser);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
