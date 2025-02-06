using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace Common.Services.ZarinpalService.Commands.AddZarinpals
{
    public class AddZarinpalService : IAddZarinpalService
    {
        private readonly IConfiguration _configuration;
        public AddZarinpalService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ResultRequestZarinpalDto RequestZarinpal(RequestRequestZarinpalDto request)
        {
            string? apiUrl = _configuration["AppSettings:ZarinpalRequest"];
            if (apiUrl == null)
                apiUrl = "";
            var client = new RestClient(apiUrl);
            var restRequest = new RestRequest("", Method.Post) { RequestFormat = DataFormat.Json }
                .AddBody(JsonConvert.SerializeObject(request))
                .AddHeader("Content-Type", "application/json")
                .AddHeader("accept", "application/json");
            var response = client.Execute(restRequest);

            try
            {


                var responseContent = JsonConvert.DeserializeObject<ResultRequestZarinpalSuccessDto>(response.Content);

                return new ResultRequestZarinpalDto
                {
                    Data = responseContent.Data
                };
            }
            catch
            {
                var responseContent = JsonConvert.DeserializeObject<ResultRequestZarinpalErrorDto>(response.Content);


                if (responseContent == null)
                {
                    return new ResultRequestZarinpalDto()
                    {

                    };
                }

                return new ResultRequestZarinpalDto
                {
                    Errors = responseContent.Errors
                };
            }
        }

        public ResultVerifyZarinpalDto VerifyZarinpal(RequestVerifyZarinpalDto request)
        {
            string? apiUrl = _configuration["AppSettings:ZarinpalVerify"];
            if (apiUrl == null)
                apiUrl = "";
            var client = new RestClient(apiUrl);
            var restRequest = new RestRequest("", Method.Post) { RequestFormat = DataFormat.Json }
                .AddBody(JsonConvert.SerializeObject(request))
                .AddHeader("Content-Type", "application/json")
                .AddHeader("accept", "application/json");
            var response = client.Execute(restRequest);
            if (response.Content == null)
            {
                return new ResultVerifyZarinpalDto()
                {
                    Data = new ResultVerifyDataDto() { card_hash = "", card_pan = "", fee = "", fee_type = "", ref_id = "", message = "ZarinpalVerify : دیتایی دریافت نشد" }
                };
            }
            var responseContent = JsonConvert.DeserializeObject<ResultVerifyZarinpalDto>(response.Content);
            if (responseContent == null)
            {
                return new ResultVerifyZarinpalDto()
                {
                    Data = new ResultVerifyDataDto() { card_hash = "", card_pan = "", fee = "", fee_type = "", ref_id = "", message = "ZarinpalVerify : خطای نامشخص!!!" }
                };
            }
            return responseContent;
        }
    }
}
