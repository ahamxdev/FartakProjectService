using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.TeacherUserSelects.Commands.RemoveTeacherUserSelects
{
    public class RemoveTeacherUserSelectService : IRemoveTeacherUserSelectService
    {

        private readonly IDatabaseContext _context;


        public RemoveTeacherUserSelectService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveTeacherUserSelectDto request)
        {
            var teacherUserSelect = _context.TeacherUserSelects.Find(request.TeacherUserSelectId);
            if (teacherUserSelect == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.TeacherUserSelects.Remove(teacherUserSelect);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
