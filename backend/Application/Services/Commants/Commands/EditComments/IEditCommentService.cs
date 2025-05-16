using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.Commants.Commands.EditComments
{
    public interface IEditCommentService
    {
        ResultDto Execute(RequestEditCommentDto request);
        ResultDto ExecuteRead(RequestEditCommentReadDto request);
    }
}
