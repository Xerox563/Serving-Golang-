// Custom error handler for JSON parsing errors from body-parser
const jsonErrorHandler = (err, req, res, next) => {
  // Check if it's a JSON parsing error from body-parser
  // body-parser errors have status 400, are SyntaxErrors, and have a 'body' property
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('JSON Parse Error:', err.message);
    console.error('Request URL:', req.url);
    console.error('Content-Type:', req.get('Content-Type'));
    return res.status(400).json({ 
      error: 'Invalid JSON format', 
      message: err.message,
      hint: 'Please ensure your request body is valid JSON and Content-Type is application/json'
    });
  }
  
  // Check for body-parser specific error type
  if (err.type === 'entity.parse.failed' || err.type === 'entity.verify.failed') {
    console.error('JSON Parse Error:', err.message);
    return res.status(400).json({ 
      error: 'Invalid JSON format', 
      message: err.message,
      hint: 'Please ensure your request body is valid JSON and Content-Type is application/json'
    });
  }
  
  // Check for any SyntaxError with status 400 (common for JSON parsing)
  if (err instanceof SyntaxError && err.status === 400) {
    console.error('JSON Parse Error:', err.message);
    return res.status(400).json({ 
      error: 'Invalid JSON format', 
      message: err.message,
      hint: 'Please ensure your request body is valid JSON and Content-Type is application/json'
    });
  }
  
  // Pass to next error handler if not a JSON parsing error
  next(err);
};

module.exports = jsonErrorHandler;
