using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectLikes.Commands.AddProjectLikes
{
    public class AddProjectLikeService : IAddProjectLikeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectLikeService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectLikeDto> Execute(RequestAddProjectLikeDto request)
        {


            try
            {
                ProjectLike ProjectLike = new ProjectLike
                {
                    ProjectId = request.ProjectId,
                    UserId = request.UserId,

                };
                _context.ProjectLikes.Add(ProjectLike);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectLikeDto>
                {
                    Data = new ResultAddProjectLikeDto
                    {
                        ProjectLikeId = ProjectLike.ProjectId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectLikeDto>
                {
                    Data = new ResultAddProjectLikeDto { ProjectLikeId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
