public class UserService 
{
    private readonly UserRepository _repository;

    public UserService(UserRepository repository)
    {
        _repository = repository;
    } 

    public async Task<UserDto?> GetUserAsync(int userId)
    {
        var user = await _repository.GetUserAsync(userId);

        if (user == null)
            return null;

        return new UserDto(user.Id, user.Name);
    }

    public async Task<List<PostDto>> GetUserPostsAsync(int userId)
    {
        var posts = await _repository.GetUserPostsAsync(userId);

        return posts
            .Select(p => new PostDto(p.Id, p.UserId))
            .ToList();
    }

    public async Task<UserProfileDto?> GetUserProfileAsync(int userId)
    {
        var user = await _repository.GetUserAsync(userId);
        if (user == null)
            return null;

        var posts = await _repository.GetUserPostsAsync(userId);

        return new UserProfileDto(
            user.Id,
            user.Name,
            posts.Count
        );
    }
}
