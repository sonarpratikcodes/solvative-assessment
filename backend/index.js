// Author: Pratik Sonar <sonarpratik.sp@gmail.com>

// Initializing express app.
const express = require("express");
const usersRouter = require("./routers/users.routers");
const app = express();
const port = process.env.PORT || 8000;

const api_version = "api/v1";

app.use(`/${api_version}/users`, usersRouter);

// Listening to the server.
const callback = () => {
  let message;
  message = new Date().toISOString();
  message += `\nServer is listening on port ${port}`;
  message += `\nhttp://localhost:${port}/`;

  console.log(message);
};
app.listen(port, callback);
