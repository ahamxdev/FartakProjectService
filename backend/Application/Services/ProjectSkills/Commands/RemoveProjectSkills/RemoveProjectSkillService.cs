using Application.Interfaces.Contexts;
using Application.Services.ProjectCategories.Commands.RemoveProjectCategories;
using Common.Dto;


namespace Application.Services.ProjectSkills.Commands.RemoveProjectSkills
{
    public class RemoveProjectSkillService : IRemoveProjectSkillService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectSkillService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectSkillDto request)
        {
            var ProjectSkills = _context.ProjectSkills.Find(request.ProjectSkillId);
            if (ProjectSkills == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectSkills.Remove(ProjectSkills);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
