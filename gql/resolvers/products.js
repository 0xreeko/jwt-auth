const { productsDB } = require("../../fakeData");
const isAuth = require("../../middleware/auth");
const { AuthenticationError } = require("apollo-server-express");

module.exports = {
  Query: {
    async getProducts(_, __, ctx) {
      // console.log(ctx.req);
      const { user } = isAuth(ctx);
      if (user.username) {
        return productsDB;
      } else {
        throw new AuthenticationError("gotta login yo!");
      }
    },
  },
};
