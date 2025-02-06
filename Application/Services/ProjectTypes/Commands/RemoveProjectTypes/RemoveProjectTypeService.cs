using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectTypes.Commands.RemoveProjectTypes
{
    public class RemoveProjectTypeService : IRemoveProjectTypeService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectTypeDto request)
        {
            var ProjectType = _context.ProjectTypes.Find(request.ProjectTypeId);
            if (ProjectType == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectTypes.Remove(ProjectType);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
