using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Commands.EditComments
{
    public class RequestEditCommentDto
    {
        public long CommentId { get; set; }
        public required string Message { get; set; }
        public required string UpdateDate { get; set; }
    }

    public class RequestEditCommentReadDto
    {
        public long CommentId { get; set; }
        public required int Read { get; set; } //0Not 1Yes
    }

}
