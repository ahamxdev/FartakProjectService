using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace Common.Services.UserService.Token.Queries.GetToken
{
    public class GetTokenService : IGetTokenService
    {
        private readonly IConfiguration _configuration;
        public GetTokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //CheckTokenValidator
        public bool GetValidateToken(RequestGetTokenDto dto)
        {
            string apiUrl = _configuration["AppSettings:GetTokenCheck"];
            var client = new RestClient(apiUrl);

            var request = new RestRequest("", Method.Post) { RequestFormat = DataFormat.Json }
                .AddBody(JsonConvert.SerializeObject(dto))
                .AddHeader("Content-Type", "application/json");
            var response = client.Execute(request);
            var responseContent = JsonConvert.DeserializeObject<ResultGetTokenDto>(response.Content);
            if (responseContent.rows != 1)
            {
                return false;
            }
            if (responseContent.UserToken[0].ExpireDate < DateTime.Now)
            {
                return false;
            }
            return true;
        }
    }
}
