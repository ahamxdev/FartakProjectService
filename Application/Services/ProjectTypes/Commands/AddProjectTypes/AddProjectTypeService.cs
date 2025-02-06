using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTypes.Commands.AddProjectTypes
{
    public class AddProjectTypeService : IAddProjectTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectTypeService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectTypeDto> Execute(RequestAddProjectTypeDto request)
        {


            try
            {
                ProjectType ProjectType = new ProjectType
                {
                    Title = request.Title,

                };
                _context.ProjectTypes.Add(ProjectType);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectTypeDto>
                {
                    Data = new ResultAddProjectTypeDto
                    {
                        ProjectTypeId = ProjectType.ProjectTypeId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectTypeDto>
                {
                    Data = new ResultAddProjectTypeDto { ProjectTypeId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
