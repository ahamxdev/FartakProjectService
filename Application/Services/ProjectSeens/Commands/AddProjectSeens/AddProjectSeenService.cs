using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectSeens.Commands.AddProjectSeens
{
    public class AddProjectSeenService : IAddProjectSeenService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectSeenService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectSeenDto> Execute(RequestAddProjectSeenDto request)
        {

            try
            {
                if (_context.ProjectSeens.Count(p => p.UserId == request.UserId &&
                  p.ProjectId == request.ProjectId) > 0) {

                    return new ResultDto<ResultAddProjectSeenDto>
                    {
                        Data = new ResultAddProjectSeenDto
                        {
                            ProjectSeenId = 0,
                        },
                        IsSuccess = true,
                        Message = "قبلا ثبت شده است"
                    };

                }

                ProjectSeen ProjectSeen = new ProjectSeen
                {
                    ProjectId = request.ProjectId,
                    UserId = request.UserId,
                };
                _context.ProjectSeens.Add(ProjectSeen);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectSeenDto>
                {
                    Data = new ResultAddProjectSeenDto
                    {
                        ProjectSeenId = ProjectSeen.ProjectSeenId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectSeenDto>
                {
                    Data = new ResultAddProjectSeenDto { ProjectSeenId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
