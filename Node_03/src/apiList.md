<!--

# Express Router allows you to create separate route files and organize your APIs cleanly instead of putting everything inside app.js.

Think of it as:
- A mini express app used only for routing.

Why Use Express Router?
- Organizes routes by modules (auth, users, posts)
- Cleaner folder structure
- Easier to maintain large apps
- Avoids huge app.js

-->

## Auth Router

- POST /signup # Create new user account
- POST /login # User login + JWT cookie
- POST /logout # Clear auth token

## Profile Router : All the profiles starting with the /profile will come under this

- PATCH /profile/edit # Update profile info
- GET /profile/view # View logged-in user's profile
- PATCH /profile/password # Change account password

## User Connection Request Router

- POST /sendConnectionRequest # Send a basic connection request
- POST /request/send/interested/:userID # Right swipe (interested)
- POST /request/send/ignored/:userID # Left swipe (ignored)

- POST /request/review/accepted/:requestId # Accept received request
- POST /request/review/rejected/:requestId # Reject received request

## User Router

- GET /user/connection # Get list of accepted connections
- GET /user/requests # Get pending requests received
- GET /user/feed # Get feed of other user profiles

<!-- status : ignore[left swipe] , accepted[right swipe] , accepted, rejected add comments to identify what api it will do , not much text -->
