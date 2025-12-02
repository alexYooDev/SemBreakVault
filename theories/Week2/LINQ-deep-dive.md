# 3. LINQ Deep Dive

## What LINQ actually is:
- A query language integrated into C# used for transforming collections.

## Core Operators You Mush Master

*SELECT*
```csharp
var names = users.Select(user => user.Name);
```

*WHERE*
```csharp
var adults = users.Where(user => user.Age >= 18);
```

*ANY/ALL*
```csharp
users.Any(user => user.Age > 18);
users.All(user => user.Age > 18);
```

*GROUPBY*
```csharp
var grouped = users.GroupBy(user => user.Country);
```

*ORDERBY*
```csharp
var sorted = users.OrderBy(user => user.Name);
```

*DTO Mapping Example*
```csharp
var dto = users.Select( user => new UserDto(user.Id, user.Name));
```

## LINQ Best Practice
Avoid over-chaining
```csharp
// Bad
users.Where(...).Where(...).Where(...).Select(...);

// Good
var query = users.Where(...);
var query2 = query.Where(...);
var query3 = query2.Where(...);
var result = query3.Select(...);
```