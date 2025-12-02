public record UserDto(int UserId, string Name);

public record PostDto(int PostId, int UserId);

public record UserProfileDto(int UserId, string Name, int PostCount);
