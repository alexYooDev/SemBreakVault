using System.Collections.Generic;
using System.Linq;
using MiniAPI;

public class UserRepository
{
    private static readonly List<UserDto> _users = new()
    {
        new UserDto(Guid.NewGuid(), "alex@example.com"),
        new UserDto(Guid.NewGuid(), "john@example.com")
    };

    public UserDto? GetUserByEmail(string email)
    {
        return _users.FirstOrDefault(user => user.Email == email);
    }
}