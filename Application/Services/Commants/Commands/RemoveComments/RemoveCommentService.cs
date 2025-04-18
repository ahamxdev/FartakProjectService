using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.Commants.Commands.RemoveComments
{
    public class RemoveCommentService : IRemoveCommentService
    {

        private readonly IDatabaseContext _context;

        public RemoveCommentService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveCommentDto request)
        {
            var Comment = _context.Comments.Find(request.CommentId);
            if (Comment == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "Not Found"
                };
            }
            _context.Comments.Remove(Comment);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "Data Removed"
            };
        }
    }
}
