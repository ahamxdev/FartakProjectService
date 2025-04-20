using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Queries.GetComments
{
    public class RequestGetCommentByIdDto
    {
        public long CommentId {  get; set; }
    }

    public class RequestGetCommentByUserIdDto
    {
        public long UserId { get; set; }
    }


    public class RequestGetCommentByForIdDto
    {
        public long ForId { get; set; }
    }

}
