# What is DTO?

## DTO = Data Transfer Object

A DTO is a simple object used *ONLY for sending or receiving data* across layers or systems.

it usually contains:
- No business Logic
- No methods (except small helpers)
- Only fields/properties needed for transfer

DTOs are used to:
- Send clean responses from your API
- Receive data from clients (request DTOs)
- Protect internal data models
- Prevent overexposing databse entities
- Standardize your API contracts

----

## Why DTOs exist

Because your database models often contain:
- Sensitive data (passwords, IDs)
- Navigation properties (relations)
- Too many fields unnecessary for the client
- Lazy-loaded properties
- Complex references that break serialization

*DTOs create a clean boundary*

## Example: C# DTO

Database model:

```csharp
public class User (id, user, passwordHash, createdAt) {

    public Guid Id { get; set; } = id;
    public string Email { get; set; } = user;
    public string PasswordHash { get; set; } = passwordHash;
    public DateTime CreatedAt { get; set; } = createdAt;

}
```

ApiResponse DTO:

```csharp
public record UserDto(Guid Id, string Email);
```

Your controller returns:
```csharp

User user = new User("sa-23134", "alex@email.com", "sha-456", "11-20-2025");

return new UserDto(user.Id, user.Email);
```
this ensures the password never leaks.

---
## Example: TypeScript DTO 

Database Model (e.g., Prisma, TypeORM, Mongoose):
```ts
type User = {
    id: string;
    email: string;
    passwordHash: string; /* never expose it */
    createdAt: Date;
}
```
Response DTO:
```ts
export type UserDto = {
    id: string
    email: string;
}
```
---
### Request DTO example
C#:
```csharp
public record CreateUserRequest(string Eamil, string Password);
```
TS:
```ts
export type CreateUserRequest = {
    email: string;
    password: string;
}
```
---
## DTO Summary

DTOs are used to:

|   Purpose      |                      Explanation                        |
|----------------|---------------------------------------------------------|
| 🔒 Security    | Prevent exposing sensitive fields                       |
| 🧹 Clean API   | Return only what the client needs                       |
| 📦 Stability   | Backend can change internal models without breaking API |
| 🔄 Consistency | Ensure input/output formats stay the same               |