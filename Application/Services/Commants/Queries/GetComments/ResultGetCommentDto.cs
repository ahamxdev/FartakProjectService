using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Queries.GetComments
{
    public class ResultGetCommentDto
    {
        public required List<GetCommentDto> Comments { get; set; }
        public long Rows { get; set; }
    }
}
