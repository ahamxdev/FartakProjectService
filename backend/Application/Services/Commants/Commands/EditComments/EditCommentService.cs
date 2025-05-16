using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.Commants.Commands.EditComments
{
    public class EditCommentService : IEditCommentService
    {
        private readonly IDatabaseContext _context;

        public EditCommentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestEditCommentDto request)
        {

            var Comment = _context.Comments.Find(request.CommentId);
            if (Comment == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "Not Found Comment"
                };
            }


            try
            {


                Comment.Message = request.Message;
                Comment.UpdateDate = request.UpdateDate;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "Data Saved"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "Problem to Save"
                };
            }

        }


        public ResultDto ExecuteRead(RequestEditCommentReadDto request)
        {

            var Comment = _context.Comments.Find(request.CommentId);
            if (Comment == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "Not Found Comment"
                };
            }


            try
            {


                Comment.Read = request.Read;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "Data Saved"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "Problem to Save"
                };
            }

        }

    }
}
