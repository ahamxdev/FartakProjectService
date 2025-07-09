using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectCategories.Commands.RemoveProjectCategories
{
    public class RemoveProjectCategorieservice : IRemoveProjectCategorieservice
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectCategorieservice(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectCategoryDto request)
        {
            var ProjectCategory = _context.ProjectCategories.Find(request.ProjectCategoryId);
            if (ProjectCategory == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectCategories.Remove(ProjectCategory);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
