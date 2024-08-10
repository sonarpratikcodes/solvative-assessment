const express = require("express");
const {
  GET_USERS,
  GET_USER_BY_ID,
  ADD_USER,
  UPDATE_USER_BY_ID,
} = require("../controllers/users.controllers");
const usersRouter = express.Router();

usersRouter.get("/", GET_USERS);
usersRouter.get("/:id", GET_USER_BY_ID);
usersRouter.post("/", ADD_USER);
usersRouter.put("/:id", UPDATE_USER_BY_ID);

module.exports = usersRouter;
