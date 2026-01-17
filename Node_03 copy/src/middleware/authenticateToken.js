const jwt = require("jsonwebtoken");
const User = require("../models/user");
// JWT Secret Key - change this in production
const JWT_SECRET = "your-secret-key-change-this-in-production";

const authenticateToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "Please Login!" });
    }

    const decodedObj = await jwt.verify(token, JWT_SECRET);

    // Login route creates token with userId, so we need to check both
    const userId = decodedObj.userId || decodedObj._id;

    if (!userId) {
      return res.status(401).json({ error: "Invalid token format" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    // JWT verification errors (expired, invalid, etc.)
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res.status(403).json({ error: "Invalid or Expired Token" });
    }
    // Other errors
    res.status(401).json({ error: err.message || "Authentication failed" });
  }
};

module.exports = authenticateToken;
