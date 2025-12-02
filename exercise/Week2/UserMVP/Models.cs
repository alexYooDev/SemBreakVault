public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Post
{
    public int Id { get; set; }
    public int UserId { get; set; }
}
