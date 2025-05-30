﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Commands.AddComments
{
    public class RequestAddCommentDto
    {
        public long CommentId { get; set; }
        public long UserId { get; set; }
        public required string Message { get; set; }
        public required string CreateDate { get; set; }
        public required string UpdateDate { get; set; }
        public int ForId { get; set; }
        public required string Action { get; set; }

    }
}
