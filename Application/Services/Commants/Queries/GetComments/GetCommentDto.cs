using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Queries.GetComments
{
    public class GetCommentDto
    {
        public long CommentId { get; set; }
        public long UserId { get; set; }
        public required string Message { get; set; }
        public required string CreateDate { get; set; }
        public required string UpdateDate { get; set; }
        public int ForId { get; set; }
        public required string action { get; set; }
        public required int Read { get; set; } //0Not 1Yes
    }
}
