const express = require("express");
const { adminAuth, userAuth } = require("./middleware/authMiddleware");
const app = express();

// using middleware
app.use("/admin", adminAuth);
app.use("/", userAuth);

app.get("printData", (req, res, next) => {
  console.log("Auth Method Called !!");
  res.send("Print all Users Data !!");
});

app.get("printDetails", userAuth, (req, res, next) => {
  // first middleware userAuth will run only if authticates then next line will be called
  console.log("Auth Method Called !!");
  res.send("Print all Users Data !!");
});

// * ---------------- Case 1 -----------------
// one route can have the multiple route handlers
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("user:1 called !!");
//     res.send("Handling the route user:1 !!");
//     // From here below the v8 engine will not read as soon as he sees the res.send it will return the response thats it .
//   },
//   () => {
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// only user 1 will be called

// * ---------------- Case 2 -----------------
// app.use(
//   "/users",
//   (req, res) => {
//     // This does not send any response , so it will hang around as it will not find res.send() for first route handle
//     // console.log("user:1 called !!");
//     // res.send("Handling the route user:1 !!");
//   },
//   () => {
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// only user 1 will be called

// * ---------------- Case 3 -----------------
// app.use(
//   "/users",
//   (req, res, next) => {
//     // First middleware
//     // console.log("user:1 called !!");
//     next();
//   },
//   (req, res) => {
//     // Second middleware
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// now user 2 will be called

// * ---------------- Case 4 -----------------
// app.use(
//   "/users",
//   (req, res, next) => {
//     // First middleware
//     // console.log("user:1 called !!");
//     res.send("Handling the route User:1 !!");
//     next();
//   },
//   (req, res) => {
//     // Second middleware
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// now user 1 will be called

// * ---------------- Case 5 -----------------
// app.use(
//   "/users",
//   (req, res, next) => {
//     // First middleware
//     // console.log("user:1 called !!");
//     next();
//     res.send("Handling the route User:1 !!");
//   },
//   (req, res) => {
//     // Second middleware
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// now user 2 will be called

// order of execution : till Line: 73 -> Line: 74 -> Line: 77 -> Line: 75 [with error at same line] [according to js Execution context]

// * New case

// Last one will be sent as response
// app.use(
//   "/learn",
//   (req, res, next) => {
//     console.log("HAndling LEarn: 1");
//     // res.send("Handling LEarn 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 2");
//     // res.send("Handling LEarn 2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 3");
//     // res.send("Handling LEarn 3");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 4");
//     //  res.send("Handling LEarn 4");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 5");
//     res.send("Handling LEarn 5");
//   }
// );

// case 2 : This will give error , as last next will not find the next route handler
// also route handles can be wrapped inside the array [some or all or single]
// app.use("/learn", [
//   (req, res, next) => {
//     console.log("HAndling LEarn: 1");
//     // res.send("Handling LEarn 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 2");
//     // res.send("Handling LEarn 2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 3");
//     // res.send("Handling LEarn 3");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 4");
//     //  res.send("Handling LEarn 4");
//     next();
//   },
//   (req, res, next) => {
//     console.log("HAndling LEarn: 5");
//     //  res.send("Handling LEarn 5");
//     next();
//   },
// ]);

// route handlers are the functions that are actually handling the routes .
// these functions that uu put in the middle are the middlewares

/*
🔁 FULL FLOW (High Level)
Browser → Express Server → Middleware → Route → Logic → Response


Now let’s go step by step.

1️⃣ Browser Sends HTTP Request
You type in URL bar:
http://localhost:3000/profile

Browser sends an HTTP request:
GET /profile HTTP/1.1
Host: localhost:3000

2️⃣ Node.js Receives the Request
Node.js:
Is already running
Listening on port 3000
app.listen(3000);

👉 Node.js accepts the incoming request and passes it to Express.js.

3️⃣ Express App Gets the Request
Basic Express server:
const express = require("express");
const app = express();

Now Express creates:
req → request object
res → response object
These objects are passed through Express.

4️⃣ Middleware Execution (VERY IMPORTANT)
Before reaching the route, request goes through middleware.
Example middleware:
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); // pass control
});

What middleware can do:
Logging
Authentication
Validation
Parsing JSON
If next() is not called ❌
➡️ request stops there.

5️⃣ Route Matching in Express
Express checks:
HTTP method → GET
URL path → /profile
Route definition:
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

✔️ Match found → handler runs
❌ No match → 404 error


6️⃣ Business Logic Runs (Controller)
Real-world /profile example:
app.get("/profile", (req, res) => {
  const user = {
    username: "john_doe",
    bio: "Travel | Food | Life"
  };

  res.json(user);
});

Here Express:
Executes your JS logic
Prepares data for response

7️⃣ (Optional) Express Talks to Database
If database is involved:
app.get("/profile", async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);6
});

Flow:
Express → Database → Express

8️⃣ Express Sends HTTP Response
Express sends response using res:
res.json(user);

Under the hood:
Sets headers
Sets status code (200)
Sends JSON data
Browser receives:
{
  "username": "john_doe",
  "bio": "Travel | Food | Life"
}

9️⃣ Browser Renders the Response
Frontend:
Reads response
Updates UI
Displays profile info
If it’s a browser-only test:
You see JSON on screen
🔁 One-Line Flow
Browser → Express → Middleware → Route → Logic → Response

*/

app.listen(3001, () => {
  console.log("Server running on Port:3001 ");
});

//* Middleware processes a request before it reaches the route handler, while the route handler handles a specific route and sends the response.

// app.listen(4444, (req, res) => {
//   console.log("Server Running on Port:4444");
// });
