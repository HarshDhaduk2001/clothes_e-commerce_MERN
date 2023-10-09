const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const authRouters = require("./routes/authRouter");
const userRouters = require("./routes/userRouter");

app.use("/auth", authRouters);
app.use("/users", userRouters)

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
