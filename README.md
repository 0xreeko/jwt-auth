# JWT-Auth

An mini-project aiming to create a secure backend with JWT tokens. The said JWTs will be used to authenticate a user that has logged in and allow them to see the products available. After 30 seconds (to quickly see how the auth process works), the token will expire. Created by setting up the Apollo Express server, and using the GraphQL Playground to query the GQL API.

## Packages Used

- Bcrypt - for hashing sensitive data
- Nodemon - for auto-reloading when there is a change to the server
- Apollo Server Express - for the creation of an Apollo Server geared towards Express
- Express - for the addition other libraries related to Express, to the server
- JsonWebToken - for the creation of tokens
- Cookie Parser - required middleware
- GraphQL - needed for the as dependency for the server
