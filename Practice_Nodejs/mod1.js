const express = require("express");
const path = require("path");
const app = express();

// Middleware: Allows Express to read JSON data from req.body
app.use(express.json());

/*
|--------------------------------------------------------------------------
| 1. req.body  (POST requests)
|--------------------------------------------------------------------------
| req.body is used when the client sends data to the server.
| Examples: login forms, registration, API data.
| NOTE: You must enable express.json() above to parse JSON bodies.
*/
app.post("/login", (req, res) => {
  // Send back the body received
  res.json({ receivedBody: req.body });
});

/*
|--------------------------------------------------------------------------
| 2. req.params  (URL parameters)
|--------------------------------------------------------------------------
| Used for dynamic URLs like /user/10, /post/99, etc.
| Example URL: GET /user/50 → req.params = { id: "50" }
*/
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

/*
|--------------------------------------------------------------------------
| 3. req.query  (Query strings)
|--------------------------------------------------------------------------
| Used for filters/search/pagination.
| Example URL: /search?name=amit&age=22
| req.query = { name: "amit", age: "22" }
*/
app.get("/search", (req, res) => {
  res.json({ query: req.query });
});

/*
|--------------------------------------------------------------------------
| 4. req.headers  (HTTP headers)
|--------------------------------------------------------------------------
| Headers are hidden metadata sent by the client.
| Common headers:
| - Authorization: "Bearer token_here"
| - Content-Type: "application/json"
| - User-Agent: Browser/App information
| - Accept: Types of data client accepts
*/
app.get("/headers", (req, res) => {
  res.json({ headers: req.headers });
});

/*
|--------------------------------------------------------------------------
| 5. res.send()  (General response)
|--------------------------------------------------------------------------
| Sends string, HTML, or Buffer.
| Automatically sets content type.
*/
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

/*
|--------------------------------------------------------------------------
| 6. res.json()  (JSON response)
|--------------------------------------------------------------------------
| Always use for APIs.
| Automatically sets Content-Type: application/json
*/
app.get("/json", (req, res) => {
  res.json({ message: "JSON response" });
});

/*
|--------------------------------------------------------------------------
| 7. res.status()  (HTTP Status Codes)
|--------------------------------------------------------------------------
| Sets HTTP response status like:
|
| ✔ 200 OK
| ✔ 201 Created
| ✔ 400 Bad Request
| ✔ 401 Unauthorized
| ✔ 403 Forbidden
| ✔ 404 Not Found
| ✔ 500 Internal Server Error
|
| Combine with .send() or .json()
*/
app.get("/notfound", (req, res) => {
  res.status(404).send("Page not found");
});

/*
|--------------------------------------------------------------------------
| 8. res.sendFile()  (Sending files)
|--------------------------------------------------------------------------
| Used to serve HTML, images, PDFs, etc.
| __dirname → current folder
*/
app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/*
|--------------------------------------------------------------------------
| 9. res.redirect()  (Redirect to another URL)
|--------------------------------------------------------------------------
| Useful to redirect user to a new location.
| Example: Redirect old route to new route
*/
app.get("/google", (req, res) => {
  res.redirect("https://google.com");
});

// Start server
app.listen(3000, () => console.log("Server running at 3000"));
