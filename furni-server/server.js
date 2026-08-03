const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const path = require("path");

dotenv.config();

(async () => {
  await connectDB();

  const app = express();

  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://furni-ecommerce-iota.vercel.app",
      ],
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/orders", orderRoutes);

  app.get("/", (req, res) => {
    res.send("API Running...");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
