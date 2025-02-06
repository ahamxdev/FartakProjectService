using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectUsers.Commands.AddProjectUsers
{
    public class AddProjectUserService : IAddProjectUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectUserService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectUserDto> Execute(RequestAddProjectUserDto request)
        {


            try
            {
                ProjectUser ProjectUser = new ProjectUser
                {
                    ProjectId = request.ProjectId,
                    Status = request.Status,
                    UserId = request.UserId,
                };
                _context.ProjectUsers.Add(ProjectUser);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectUserDto>
                {
                    Data = new ResultAddProjectUserDto
                    {
                        ProjectUserId = ProjectUser.ProjectUserId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectUserDto>
                {
                    Data = new ResultAddProjectUserDto { ProjectUserId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
