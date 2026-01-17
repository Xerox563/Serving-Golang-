// Middleware to log incoming requests (for debugging)
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - Content-Type: ${req.get('Content-Type')}`);
  next();
};

module.exports = requestLogger;
