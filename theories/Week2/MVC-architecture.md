# 2. Backend Architecture - Controller -> Service -> Repository

This is industry standart backend layering
```md
[Controller]
- Handles HTTP requests
- Validates input
- Invokes service layer

[Service]
- Business logic
- External API calls

[Repository]
- Database access
- Data mapping

[Database]
- Stores data
```

## Benefits
- Separation of concerns
- Testability
- Maintainability

## Examples (C#)

DTO
```csharp
// DTO
public record UserDto(int Id, string Name);
```

Controller
```csharp
public class UserController
{
    private readonly UserService _service;

    public UserController(UserService service)
    {
        _service = service;
    }

    public async Task<UserDto> GetUser(int id)
    {
        return await _service.GetUserAsync(id);
    }
}
```
Service
```csharp
public class UserService
{
    private readonly UserRepository _repo;

    public UserService(UserRepository repo)
    {
        _repo = repo;
    }

    public async Task<UserDto> GetUserAsync(int id)
    {
        var user = await _repo.GetUserAsync(id);
        return new UserDto(user.Id, user.Name);
    }
}
```
Repository
```csharp
public class UserRepository
{
    public async Task<User> GetUserAsync(int id)
    {
        return await _db.Users.FindAsync(id);
    }
}
```

This is how real APIs are structured in .NET, Node, Java, and Go.


