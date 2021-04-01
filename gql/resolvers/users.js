const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_ACCESS, SECRET_REFRSH, TEMPO } = require("../../config");
const { usersDB } = require("../../fakeData");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    SECRET_ACCESS,
    { expiresIn: TEMPO }
  );
};

module.exports = {
  Mutation: {
    async register(
      _,
      { registerUser: { username, email, password, confirmPassword } }
    ) {
      const user = usersDB.find((e) => username === e.username);
      if (user) {
        console.log("🚨username is taken");
      } else {
        if (password !== confirmPassword) {
          console.log("🚨password not the same");
        } else {
          password = await bcrypt.hash(password, 12);
          const newUser = {
            id: usersDB.length + 1,
            username: username,
            password: password,
            email: email,
          };
          usersDB.push(newUser);
        }
      }
      return usersDB;
    },
    async login(_, { username, password }, { req, res }) {
      const user = await usersDB.find((u) => u.username === username);
      if (!user) {
        throw new Error("🚨 soz! no user found");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new Error("🚨 passwords dont match");
      }

      const token = generateToken(user);
      // const authCookie = res.cookie("jwtToken", token, {
      //   httpOnly: true,
      //   maxAge: 30000,
      // });
      // req.authCookie = authCookie;
      console.log(token);
      return {
        ...user,
        token,
      };
    },
    async logout(_, __, { req }) {
      req.user = null;
      return "Log out successful";
    },
  },
};
