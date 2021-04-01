const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const jwt = require("jsonwebtoken");
const resolvers = require("./gql/resolvers");
const typeDefs = require("./gql/typeDefs");
const cookieParser = require("cookie-parser");
const { PORT, SECRET_ACCESS } = require("./config");
const checkAuth = require("./middleware/checkAuth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

const app = express();
app.use(cookieParser());
// app.use(checkAuth);

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀[INFO] server on @ http://localhost:${PORT}/graphql`);
});
