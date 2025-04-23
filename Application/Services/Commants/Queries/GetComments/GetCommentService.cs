using Application.Interfaces.Contexts;

namespace Application.Services.Commants.Queries.GetComments
{
    public class GetCommentService : IGetCommentService
    {
        private readonly IDatabaseContext _context;
        public GetCommentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultGetCommentDto GetAll()
        {

            var Comments = _context.Comments;
            var CommentList = Comments.Select(p => new GetCommentDto
            {
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                CommentId = p.CommentId,
                CreateDate=p.CreateDate,
                UpdateDate=p.UpdateDate,
                Action=p.Action,
                ForId=p.ForId,

            }).OrderBy(x => x.CommentId).ToList();
            return new ResultGetCommentDto()
            {
                Comments = CommentList,
                Rows = CommentList.Count,


            };

        }

        public ResultGetCommentDto GetById(RequestGetCommentByIdDto request)
        {
            var Comments = _context.Comments.Where(x => x.CommentId == request.CommentId);
            var CommentList = Comments.Select(p => new GetCommentDto
            {
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                CommentId = p.CommentId,
                CreateDate = p.CreateDate,
                UpdateDate = p.UpdateDate,
                Action = p.Action,
                ForId = p.ForId,

            }).OrderBy(x => x.CommentId).ToList();
            return new ResultGetCommentDto()
            {

                Comments = CommentList,
                Rows = CommentList.Count,

            };
        }


        public ResultGetCommentDto GetByUserId(RequestGetCommentByUserIdDto request)
        {
            var Comments = _context.Comments.Where(x => x.UserId == request.UserId);
            var CommentList = Comments.Select(p => new GetCommentDto
            {
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                CommentId = p.CommentId,
                CreateDate = p.CreateDate,
                UpdateDate = p.UpdateDate,
                Action = p.Action,
                ForId = p.ForId,

            }).OrderBy(x => x.CommentId).ToList();
            return new ResultGetCommentDto()
            {

                Comments = CommentList,
                Rows = CommentList.Count,

            };
        }


        public ResultGetCommentDto GetByForId(RequestGetCommentByForIdDto request)
        {
            var Comments = _context.Comments.Where(x => x.ForId == request.ForId);
            var CommentList = Comments.Select(p => new GetCommentDto
            {
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                CommentId = p.CommentId,
                CreateDate = p.CreateDate,
                UpdateDate = p.UpdateDate,
                Action = p.Action,
                ForId = p.ForId,

            }).OrderBy(x => x.CommentId).ToList();
            return new ResultGetCommentDto()
            {

                Comments = CommentList,
                Rows = CommentList.Count,

            };
        }


        public ResultGetCommentDto GetAllUnRead()
        {
            var Comments = _context.Comments.Where(x =>  x.Read == 0);
            var CommentList = Comments.Select(p => new GetCommentDto
            {
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                CommentId = p.CommentId,
                CreateDate = p.CreateDate,
                UpdateDate = p.UpdateDate,
                Action = p.Action,
                ForId = p.ForId,

            }).OrderBy(x => x.CommentId).ToList();
            return new ResultGetCommentDto()
            {

                Comments = CommentList,
                Rows = CommentList.Count,

            };
        }


    }
}
