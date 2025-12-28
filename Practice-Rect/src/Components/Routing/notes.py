# Routing : Showing different pages/components based on the url, without reloading the page.
# Client Side Routing
#  Routing allows:
# ✔ URL changes
# ✔ No page reload
# ✔ Fast navigation

# How Routing Works in React[Behind the scenes] !!
'''
In a React SPA:
✔ Only one real file on server
index.html

❌ No real:
/about.html
/contact.html
Everything else is virtual.

1️⃣ FIRST LOAD (Server IS involved)
User enters:
localhost:5173/

Flow:
Browser → Server → index.html
↓
index.html loads JS (React app)
↓
React app starts
↓
React Router reads current URL "/"
↓
<Home /> is rendered
📌 Server is involved ONLY here.


2️⃣ USER CLICKS A LINK (Client-Side Routing)

User clicks:

<Link to="/about">About</Link>

🔥 What REALLY Happens
Click event
↓
React Router intercepts click
↓
event.preventDefault()  ❌ stop browser navigation
↓
history.pushState({}, "", "/about")
↓
URL changes to /about
↓
NO server request


📌 This is the most important step.

3️⃣ pushState — What Exactly It Does
history.pushState({}, "", "/about");

✔ Changes URL
✔ Adds entry to browser history
✔ Does NOT reload page
✔ Does NOT contact server

Browser thinks:
“URL changed, but page stays”

4️⃣ React Router Responds to URL Change

React Router:
Reads new URL /about
Matches route table
<Route path="/about" element={<About />} />
Renders <About />
React re-renders UI

📌 This is just conditional rendering.

5️⃣ USER CLICKS BACK BUTTON (popstate)

User clicks ⬅️ Back.
Browser does:
URL changes from /about → /
Browser fires:
popstate event

6️⃣ React Router Listens to popstate

React Router:
window.addEventListener("popstate", ...)

Flow:
popstate event fires
↓
React Router detects URL change
↓
Matches route "/"
↓
<Home /> is rendered

✔ Back/Forward works
✔ No reload
✔ No server request

7️⃣ Forward Button (Same Flow)

Forward ➡️ works exactly the same using popstate.

8️⃣ WHAT IF USER REFRESHES /about?

User presses 🔄 Refresh.

Flow:
Browser reloads page
↓
Browser asks server for /about
📌 Always return index.html.

🔁 AFTER FIX (Refresh Flow)
Refresh /about
↓
Server returns index.html
↓
React app loads
↓
React Router reads URL "/about"
↓
<About /> renders


✔ Works perfectly

🔂 FULL FLOW DIAGRAM (TEXT)
Initial load:
Browser → index.html → React → Router → Component

Click <Link>:
Click → preventDefault → pushState → URL change → Router → Component

Back/Forward:
Browser URL change → popstate → Router → Component

Refresh:
Browser → server → index.html → Router → Component

'''

# What Happens when we install a Package
'''
- npm reads package.json
- downloads the react-router-dom
- adds it to the dependencies
- updates the package-lock.json
- places files inside the node_modules
'''
