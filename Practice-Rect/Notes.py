# CDN
'''
CDN is a system that delivers the website files from the neareest server to the user.
-> IT makes websites load faster by serving files from the nearest server.
providers : Cloudflare, Akamai etc.
'''

# CDN + Bandwidth[how much data can be sent at one time]
'''
# Without CDN
- One server handles all the load
- bandwidth gets overloaded
- dowloads slow down

# With CDN
- Many servers share the load
- Each server handles fewer users
- More bandwidth available per user
'''

# CDN + Latency[delay before data starts arriving/How long it takes for data to go from server → user]
'''
Without CDN:
✔ Long distance
✔ High latency (200-300 ms)
✔ Slow first response

With CDN:
✔ Short distance
✔ Low latency (20-30 ms)
✔ Faster response
'''
# CDN reduces latency by placing servers closer.

# Origin : protocol + doman + port [https://example.com:443]
'''
IF anyone of these are different : different origin
Cross-origin means:
A resource (file) is loaded from a different origin than the website.

Your site: https://myapp.com
Script from: https://cdn.jsdelivr.net
👉 This is cross-origin

The crossorigin attribute tells the browser how to handle cross-origin requests, especially for:
<script>, <link>, <img>, <audio>, <video>
'''

# Why needed ?
'''
Browsers follows strict security rules called the Same origin policy
Same origin policy : A website can freely access resources only from the same origin
(protocol + domain + port)
This rule exists to protect users from:
- Data theft
- Session hijacking

# The Problem Without crossorigin
When your site loads files from a CDN (different origin):
<script src="https://cdn.jsdelivr.net/react.js"></script>

The browser asks:
❓ “Should I trust this external file?”
Without instructions, the browser:
Loads the file
❌ Blocks detailed error info
❌ Restricts access to headers
❌ Hides stack traces

This makes:
- Debugging hard
- Error monitoring unreliable

# The crossorigin attribute tells the browser:
“How should I handle security, credentials, and error reporting for this cross-origin resource?”
'''

# React.createElement : 