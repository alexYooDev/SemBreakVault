# The 3-layer backend architecture

## Definition
- Controller -> handles HTTP requests
- Service -> business logic
- Repository -> data access (DB/file/external API)

## What each layer does

### Controller (Entry Point)
*Job*: Deals with request & response ONLY.
- Never put business logic here
- Never perform DB reads/writes here.

### Service (Business Logic)
*Jobs*
- validation
- calculations
- combining data
- checking conditions
- mapping entities -> DTOs

Controller call service -> service calls repo.

### Repository (Data Layer)
*Job*: Handles all data access, such as:
- database queries
- file access
- external API calls
- caching layers
---
## Why do companies use these layers?
it gives:
- Separation of concerns
- Testability (unit test service without touching DB)
- Scalability 
- Clean, maintainable code
- Easier onboarding for new enginners
- Easier to replace components (e.g., switch MongoDB -> PostgreSQL)

