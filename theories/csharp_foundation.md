# 2. Language Foundation

## 2.1 C# Backend Concepts

Learn to think in:
- Classes and models
- Dependency injection
- Interfaces
- Services
- Controllers
- LINQ
- Async/await in real backend cotext

## 2.2 TypeScript Backend Concepts (for Node/Nest.js)

Backend TS means:
- Strong typing for API responses
- DTOs / request validators
- Splitting logic into modules
- Writing middleware
- Error handling

## Hands-on exercise 

### Build a tiny HTTP endpoint logic (withour server framework)

- Task: Define a class that respresents a backend endpoint:

```csharp
class ApiResponse {
  public int Status { get; set; }
  public string Message { get; set; } 

class UserController {
  public ApiResponse GetUser () {
    return new ApiResponse {
      Status = 200,
      Message = "User fetched successfully!"
    };
  }
}
```
Start thinking in "Controller -> Response" pattern.

### Simulate an Express handler

- Task: Write a function pretending to be an Express endpoint

```typescript
type ApiResponse = {
 status: number;
 message: string;
}

export function getUser(): ApiResponse {
  return {
    status: 200,
    message: "User fetched sucessfully!"
  };
}
```
This mindset carries into real Express servers.

