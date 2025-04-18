using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Users;
using Domain.Users;



namespace Application.Services.Commants.Commands.AddComments
{
    public class AddCommentService : IAddCommentService
    {
        private readonly IDatabaseContext _context;
        public AddCommentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddCommentDto> Execute(RequestAddCommentDto request)
        {

            try
            {

                Comment Comment = new Comment
                {
                    Message = request.Message,
                    Read = 0,
                    UserId = request.UserId,
                    CreateDate=request.CreateDate,
                    UpdateDate=request.UpdateDate,

                };
                _context.Comments.Add(Comment);
                _context.SaveChanges();


                return new ResultDto<ResultAddCommentDto>
                {
                    Data = new ResultAddCommentDto
                    {
                        CommentId = Comment.CommentId
                    },
                    IsSuccess = true,
                    Message = "Added Comment"
                };
            }
            catch
            {
                return new ResultDto<ResultAddCommentDto>
                {
                    Data = new ResultAddCommentDto { CommentId = 0 },
                    IsSuccess = false,
                    Message = "Problem to Save"
                };

            }
        }
    }
}




