const userResolvers = require("./users");
const productResolvers = require("./products");

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
