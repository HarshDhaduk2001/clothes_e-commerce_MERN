const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const adminProductRoute = require("./routes/adminProductRoute");
const adminOrderRoute = require("./routes/adminOrderRoute");
const authRouters = require("./routes/authRouter");
const cartItemRoute = require("./routes/cartItemRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoutes = require("./routes/orderRoutes");
const productRoute = require("./routes/productRoute");
const ratingRouter = require("./routes/ratingRouter");
const reviewRoute = require("./routes/reviewRoute");
const userRouters = require("./routes/userRouter");

app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRoute);
app.use("/api/admin/products", adminProductRoute);
app.use("/api/cart", cartRoute);
app.use("/api/cart_items", cartItemRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/admin/orders", adminOrderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/ratings", ratingRouter);

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
