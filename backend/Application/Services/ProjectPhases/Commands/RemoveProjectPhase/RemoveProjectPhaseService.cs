using Application.Interfaces.Contexts;
using Application.Services.ProjectPhases.Commands.RemoveProjectPhase;
using Common.Dto;


namespace Application.Services.ProjectPhases.Commands.RemoveProjectPhases
{
    public class RemoveProjectPhaseService : IRemoveProjectPhaseService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectPhaseService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectPhaseDto request)
        {
            var ProjectPhase = _context.ProjectPhases.Find(request.ProjectPhaseId);
            if (ProjectPhase == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectPhases.Remove(ProjectPhase);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
