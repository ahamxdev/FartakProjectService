using Application.Interfaces.Contexts;
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
            var ProjectSkill = _context.ProjectSkills.Find(request.ProjectSkillId);
            if (ProjectSkill == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectSkills.Remove(ProjectSkill);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
