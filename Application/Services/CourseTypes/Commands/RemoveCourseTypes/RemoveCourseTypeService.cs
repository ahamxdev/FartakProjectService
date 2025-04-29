using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.CourseTypes.Commands.RemoveCourseTypes
{
    public class RemoveCourseTypeService : IRemoveCourseTypeService
    {

        private readonly IDatabaseContext _context;


        public RemoveCourseTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveCourseTypeDto request)
        {
            var CourseType = _context.CourseTypes.Find(request.CourseTypeId);
            if (CourseType == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.CourseTypes.Remove(CourseType);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
