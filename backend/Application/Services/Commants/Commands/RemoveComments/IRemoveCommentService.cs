using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.Commants.Commands.RemoveComments
{
    public interface IRemoveCommentService
    {
        ResultDto Execute(RequestRemoveCommentDto request);
    }
}
