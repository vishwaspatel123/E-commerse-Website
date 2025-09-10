const express = require("express");
const authRouter = express.Router();

const authcontrollers = require("../controllers/authcontrollers");

authRouter.post("/login", authcontrollers.postLogin);
authRouter.post("/signup", authcontrollers.postSignup);
authRouter.post("/logout", authcontrollers.postLogout);

module.exports = authRouter;
