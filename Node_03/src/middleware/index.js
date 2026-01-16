// Export all middlewares from a single entry point
const requestLogger = require("./requestLogger");
const jsonErrorHandler = require("./jsonErrorHandler");
const authenticateToken = require("./authenticateToken");
const jsonParser = require("./jsonParser");

module.exports = {
  requestLogger,
  jsonErrorHandler,
  authenticateToken,
  jsonParser,
};
