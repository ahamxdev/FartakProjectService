using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectCategories.Commands.RemoveProjectCategories
{
    public class RemoveProjectCategoryService : IRemoveProjectCategoryService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectCategoryService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectCategoriesDto request)
        {
            var ProjectCategories = _context.ProjectCategories.Find(request.ProjectCategoryId);
            if (ProjectCategories == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectCategories.Remove(ProjectCategories);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
