using Microsoft.AspNetCore.SignalR;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System;

public class ChatHub : Hub
{
    private readonly string _connectionString = "Server=.;Database=YourDatabase;Trusted_Connection=True;";

    // هنگام ورود کاربر، بررسی می‌شود که در کدام تیم است
    public async Task JoinTeam(long memberId)
    {
        // اگر اتصال برقرار نشد، کاری انجام نده
        //if (Context.ConnectionId == null)
        //{
        //    throw new InvalidOperationException("Connection ID is required.");
        //}

        Console.WriteLine($"Connection ID: {Context.ConnectionId}");

        try
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                string query = "SELECT ProjectTeamId FROM ProjectTeamMembers WHERE MemberId = @memberId";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@memberId", memberId);
                    using (SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            string teamId = reader["ProjectTeamId"].ToString();
                            // اضافه کردن به گروه با ConnectionId
                            await Groups.AddToGroupAsync(Context.ConnectionId, teamId);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            // مدیریت خطاها
            Console.WriteLine($"Error in JoinTeam: {ex.Message}");
            throw new InvalidOperationException("An error occurred while joining the team.");
        }
    }

    // ارسال پیام به تیم
    public async Task SendMessage(long teamId, string user, string message)
    {
        // بررسی ورودی‌ها
        if (string.IsNullOrWhiteSpace(user) || string.IsNullOrWhiteSpace(message))
        {
            throw new ArgumentException("User and message cannot be empty.");
        }

        // بررسی وجود کاراکترهای غیرمجاز برای جلوگیری از XSS یا SQL Injection
        user = SanitizeInput(user);
        message = SanitizeInput(message);

        try
        {
            // ذخیره پیام در پایگاه داده
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                string insertQuery = "INSERT INTO ChatMessages (ProjectTeamId, Sender, Message, SentAt) VALUES (@teamId, @user, @message, GETDATE())";
                using (SqlCommand command = new SqlCommand(insertQuery, connection))
                {
                    command.Parameters.AddWithValue("@teamId", teamId);
                    command.Parameters.AddWithValue("@user", user);
                    command.Parameters.AddWithValue("@message", message);
                    await command.ExecuteNonQueryAsync();
                }
            }

            // ارسال پیام به گروه
            await Clients.Group(teamId.ToString()).SendAsync("ReceiveMessage", user, message);
        }
        catch (Exception ex)
        {
            // مدیریت خطاها
            Console.WriteLine($"Error in SendMessage: {ex.Message}");
            throw new InvalidOperationException("An error occurred while sending the message.");
        }
    }

    // تابعی برای sanitize کردن ورودی‌ها (برای جلوگیری از XSS و SQL Injection)
    private string SanitizeInput(string input)
    {
        // حذف کاراکترهای خاص یا استفاده از regex برای جایگزینی کاراکترها
        return input.Replace("<", "&lt;").Replace(">", "&gt;");
    }

    // متد برای بررسی اتصال کاربر
    public override async Task OnConnectedAsync()
    {
        // اینجا می‌توانید عملیات اضافی انجام دهید
        Console.WriteLine($"یک کاربر با اتصال {Context.ConnectionId} به سرور متصل شد.");
        await base.OnConnectedAsync();
    }

    // متد برای مدیریت قطع اتصال کاربر
    public override async Task OnDisconnectedAsync(Exception exception)
    {
        // در اینجا می‌توانید عملیات اضافی انجام دهید
        Console.WriteLine($"اتصال با {Context.ConnectionId} قطع شد.");
        await base.OnDisconnectedAsync(exception);
    }
}
