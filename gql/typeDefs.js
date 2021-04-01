const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
  }
  type Product {
    id: ID!
    name: String!
  }

  type Query {
    getProducts: [Product]
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register(registerUser: RegisterInput): [User!]
    login(username: String!, password: String!): User!
    logout: String
  }
`;
