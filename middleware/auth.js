const jwt = require("jsonwebtoken");
const { SECRET_ACCESS } = require("../config");
const { AuthenticationError } = require("apollo-server-express");

module.exports = ({ req }) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("Bearer ")[1];
    if (!token) {
      return { user: null };
    } else {
      const decoded = jwt.verify(token, SECRET_ACCESS);
      return { user: decoded };
    }
  } catch (err) {
    throw new AuthenticationError("token invalid rudeboi");
  }
};
