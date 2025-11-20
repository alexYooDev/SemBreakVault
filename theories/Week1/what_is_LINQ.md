# What is LINQ in C#?

## LINQ = Language Integrated Query

LINQ is a powerful querying language build into C#.
It allows you to query:
- Lists
- Arrays
- Collections
- Databases (via EF Core)
- XML
- Anything enumerable

Using SQL-like logic but C# syntax.

---
## Example:

Without LINQ (old version):
```csharp
var numbers = new List<int> {1,2,3,4,5};
var even = new List<int>();

foreach (var n in numbers) 
{
    if ( n % 2 == 0 )
    {
        even.Add(n);
    }
}
```
With LINQ (modern way)
```csharp
var even = numbers.Where(n => n & 2 == 0).ToList();
```
Provides way cleaner approach of enumerable operations.
--- 
## Real-world Use of LINQ in Backend
- Filtering DB records
- Mapping models to DTOs
- Aggregations
- Joins
- Sorting
- Pagign
- Grouping

### Real API Example Using LINQ

Users list:

```csharp
var users = new List<User> {
    new User("a", "a@example.com"),
    new User("b", "b@example.com"),
    new User("c", "c@example.com")
};
```
---

## Common LINQ Methods to Note

```csharp
Where() // filter
Select() // map
OrderBy() // sort ascending
First() / FirstOrDefault()
Single() / SingleOrDefault()
Any() // Check existence
Count() // count items
Skip() / Take() // pagination
GroupBy() // grouping
```
--- 
## LINQ Summary 
LINQ gives:

| Benefit | Explanation |
|---------|-------------|
|🧹 Cleaner code | No loops needed |
| ⚡ Faster development | Query collections quickly | 
| 📦 Strong typing | Compiler catches errors |
| 🔄 Works with DB | EF Core translates LINQ → SQL |
| 🚀 Very powerful | Makes complex transformations easy |

It’s one of C#’s biggest advantages over Java, JS, and even Python.