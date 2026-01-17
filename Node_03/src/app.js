const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// manage the routes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

connectDB()
  .then(() => {
    console.log("✅ Database Connected Successfully !!");
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database not Connected !!", err);
  });
