const express = require("express");

// Wrapper for express.json() that properly handles errors
const jsonParser = express.json({ 
  limit: '10mb',
  strict: false  // Allow single quotes and trailing commas
});

// Wrap the JSON parser to catch and handle errors
const jsonParserWithErrorHandling = (req, res, next) => {
  jsonParser(req, res, (err) => {
    if (err) {
      // This will be caught by jsonErrorHandler
      return next(err);
    }
    next();
  });
};

module.exports = jsonParserWithErrorHandling;
