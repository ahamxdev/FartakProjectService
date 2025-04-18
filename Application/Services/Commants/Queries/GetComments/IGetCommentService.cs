using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.Commants.Queries.GetComments
{
    public interface IGetCommentService
    {
        ResultGetCommentDto GetAll();
        ResultGetCommentDto GetById(RequestGetCommentByIdDto request);
        ResultGetCommentDto GetByUserId(RequestGetCommentByUserIdDto request);
        ResultGetCommentDto GetAllUnRead();
    }
}
