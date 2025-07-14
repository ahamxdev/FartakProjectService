using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;

using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectHashtags.Commands.AddProjectHashtags
{
    public class AddProjectHashtagService : IAddProjectHashtagService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectHashtagService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectHashtagsDto> ExecuteParent(RequestAddProjectHashtagsParentDto request)
        {


            try
            {
                Domain.Entities.Projects.ProjectHashtag projectHashtags = new Domain.Entities.Projects.ProjectHashtag 

                {
                    Title = request.Title,
                    ProjectHashtagParentId = 0

                };
                _context.ProjectHashtags.Add(projectHashtags);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectHashtagsDto>
                {
                    Data = new ResultAddProjectHashtagsDto
                    {
                        ProjectHashtagId = projectHashtags.ProjectHashtagId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectHashtagsDto>
                {
                    Data = new ResultAddProjectHashtagsDto { ProjectHashtagId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }


        public ResultDto<ResultAddProjectHashtagsDto> ExecuteChild(RequestAddProjectHashtagsChildDto request)
        {


            try
            {
                Domain.Entities.Projects.ProjectHashtag projectHashtags = new Domain.Entities.Projects.ProjectHashtag

                {
                    Title = request.Title,
                    ProjectHashtagParentId = request.ProjectHashtagParentId,

                };
                _context.ProjectHashtags.Add(projectHashtags);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectHashtagsDto>
                {
                    Data = new ResultAddProjectHashtagsDto
                    {
                        ProjectHashtagId = projectHashtags.ProjectHashtagId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectHashtagsDto>
                {
                    Data = new ResultAddProjectHashtagsDto { ProjectHashtagId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }
    }
}
