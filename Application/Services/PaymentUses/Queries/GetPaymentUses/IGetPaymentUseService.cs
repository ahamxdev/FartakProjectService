using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public interface IGetPaymentUseService
    {
        ResultGetPaymentUseDto GetByUserId(RequestGetPaymentUseGetByUserIdDto request);
        ResultGetPaymentUseDto GetById(RequestGetPaymentUseGetByIdDto request);
        ResultGetPaymentUseDto GetByPaymentId(RequestGetPaymentUseGetByPaymentIdDto request);
        ResultGetPaymentUseDto GetByCourseId(RequestGetPaymentUseGetByCourseIdDto request);
        ResultGetPaymentUseDto GetAll();
    }
}
