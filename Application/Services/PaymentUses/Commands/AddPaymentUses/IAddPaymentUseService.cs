using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Dto;

namespace Application.Services.PaymentUses.Commands.AddPaymentUses
{
    public interface IAddPaymentUseService
    {
        ResultDto<ResultAddPaymentUseDto> Execute(RequestAddPaymentUseDto request);
    }
}
