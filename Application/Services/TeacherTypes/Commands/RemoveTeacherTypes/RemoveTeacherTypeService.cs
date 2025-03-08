using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.TeacherTypes.Commands.RemoveTeacherTypes
{
    public class RemoveTeacherTypeService : IRemoveTeacherTypeService
    {

        private readonly IDatabaseContext _context;


        public RemoveTeacherTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveTeacherTypesDto request)
        {
            var TeacherTypes = _context.TeacherTypes.Find(request.TeacherTypeId);
            if (TeacherTypes == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.TeacherTypes.Remove(TeacherTypes);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
