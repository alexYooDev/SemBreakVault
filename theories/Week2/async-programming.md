# 1. Asynchronous Programming

## C# - async/await Basics
In backend systems, almost all slow operations are:
- Database calls
- API calls
- File I/O
- Network I/O
These should never block the main thread -> use async/await

### Example
```csharp
public async Task<User> GetUserAsync(int id)
{
    return await _db.Users.FindAsync(id);
}
```

### Why async matters
It prevents:
- Thread starvation
- API latency
- Slow server throughput

## Node/TS - async/await

### Example:
```ts
async function getUser(id: number): Promise<User> {
    return await db.users.findOne({ where: { id }});
}
```

### Pitfall
Don't forget to return the awaited value
```ts
// BAD
async function get() {
    await fetch(url);
}

// GOOD
async function get() {
    return await fetch(url);
}
```