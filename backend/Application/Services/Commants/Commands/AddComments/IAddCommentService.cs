﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.Commants.Commands.AddComments
{
    public interface IAddCommentService
    {
        ResultDto<ResultAddCommentDto> Execute(RequestAddCommentDto request);
    }
}
