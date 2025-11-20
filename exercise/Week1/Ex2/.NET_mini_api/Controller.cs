using MiniAPI;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/user/{email}", (string email) => {
   var service = new UserService(); 
   var user = service.FetchUser(email);

   if (user is null)
    {
        return Results.NotFound("User not found");
    }

    return Results.Ok(user);
});

app.Run();