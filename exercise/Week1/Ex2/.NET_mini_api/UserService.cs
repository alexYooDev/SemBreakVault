using MiniAPI;

public class UserService
{
    private readonly UserRepository _repo = new();

    public UserDto? FetchUser(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
        {
            throw new ArgumentException("email cannot be fetched");
        }

        return _repo.GetUserByEmail(email);
    }
}