require ("dotenv").config
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.listen(8000, () => {
  console.log("server up and running on PORT 8000");;
})

