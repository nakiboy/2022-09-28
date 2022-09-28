const express = require("express");
require("dotenv").config();
require("./models/db");
const userRouter = require("./routes/user");
const User = require("./models/user");
const Product = require("./models/product");

const app = express();

// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

app.use(express.json());
app.use(userRouter);

// const test = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };

// test("natsagdorj@gmail.com", "12345678");

// app.get("/test", (req, res) => {
//   res.send("Hello world");
// });

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to backend zone!" });
});

app.listen(8000, () => {
  console.log("port is listening");
});
