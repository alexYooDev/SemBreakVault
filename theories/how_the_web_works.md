
## 1.1 What happens when a client sends a request?

```
Client -> DNS -> Server (API) -> App Code -> DB -> App Code -> Client
```

### Breakdown:
- Client sends HTTP request (browser/app/Postman, etc..)
- DNS resolves URL -> IP address
- Request hits backned server
- The server's API router maps the request -> controller/action
- Backend logic runs
- Database query or external API call happens
- Response returned to client

=> If you understand this chain of actions, you can debug 80% of backend bugs

## 1.2 HTTP Essentials

HTTP methods:
- GET -> fetch data
- POST -> create data
- PUT -> fully update data
- PATCH -> partially update data
- DELETE -> remove data

== This pattern is REST. Every backend job expects this. ==

*Status Codes you must memorize*
- 200 -> OK
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> Forbidden
- 404 -> Not Found
- 409 -> Conflicy
- 500 -> Server Error
