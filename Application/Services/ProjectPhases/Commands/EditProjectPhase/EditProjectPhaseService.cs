using Application.Interfaces.Contexts;
using Application.Services.ProjectPhases.Commands.EditProjectPhase;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectPhases.Commands.EditProjectPhase
{
    public class EditProjectPhaseService : IEditProjectPhaseService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectPhaseService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectPhaseDto request)
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


            try
            {

                ProjectPhase.Duration = request.Duration;
                ProjectPhase.Price = request.Price;
                ProjectPhase.Status = request.Status;
                ProjectPhase.DeadLine = request.DeadLine;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }

        }


    }
}
