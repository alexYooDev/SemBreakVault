public class UserController
{
    private readonly UserService _service;

    public UserController(UserService service)
    {
        _service = service;
    }

    public async Task<UserDto?> GetUser(int userId)
    {
        return await _service.GetUserAsync(userId);
    }

    public async Task<List<PostDto>> GetUserPosts(int userId)
    {
        return await _service.GetUserPostsAsync(userId);
    }

    public async Task<UserProfileDto?> GetUserProfile(int userId)
    {
        return await _service.GetUserProfileAsync(userId);
    }
}
