using MiniAPI;

public record User(Guid Id, string Email, string PasswordHash, DateTime CreatedAt);