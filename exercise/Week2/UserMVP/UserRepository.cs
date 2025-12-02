public class UserRepository 
{
    private readonly DbContext _db;

    public UserRepository(DbContext db)
    {
        _db = db;
    }

    public async Task<User?> GetUserAsync(int id)
    {
        return await _db.Users.FindAsync(id);
    } 

    public async Task<List<Post>> GetUserPostsAsync(int userId)
    {
        return await _db.Posts
            .Where(p => p.UserId == userId)
            .ToListAsync();
    }
}
