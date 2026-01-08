// Server can be both hardware as well as the software .
// we have a hardware on that we are running an OS , nothing happens if we dont have a OS,
// When we say we are deploying our application on server , it basically means running that application the OS , that application does something , means , it serves the the clients who want to connect to the hardware .
// in order to access the hardware[server], it contains all the files , in order to access those files , storage ,from the outside world , we need an application to run over the hardware, which can handle the incoming request .
// the App [running on OS], which will listen to these requests and send the data accordingly.
// So Sometimes , we refer to this Hardware as the server and sometimes to that app , which is running on the hardware as the server.
// We can also use our computer as the server.
// When we say we are creating a nodejs nttp server : it refers to the application which will handle incoming request.

// * AWS Server:
/*
- Your software or website is running on a computer owned by Amazon (AWS), not on your own physical computer.
- AWS (Amazon Web Services) has huge data centers full of powerful computers. You “rent” one of these computers through the internet and use it as your server.
- You don’t see it physically—it's just a remote machine you connect to online.
*/

// * How is AWS’s computer different from your computer?
/*
Both can be servers, but there are BIG differences.

✔ 1. Location
Your computer: At your desk or home.
AWS computer: In Amazon’s data center (secure, climate-controlled, huge buildings).

✔ 2. Availability
Your computer: Works only when it’s on. If you shut it down, your server stops.
AWS server: Stays ON 24/7, even if you sleep or turn off your laptop.

✔ 3. Internet Speed & Reliability
Your computer: Normal home internet → not stable enough for thousands of users.
AWS servers: Very fast network → designed for millions of users.

✔ 4. Hardware Power
Your computer: Limited CPU, RAM, storage.
AWS: You can choose very powerful machines (even supercomputer-level).

✔ 5. Scalability
Your computer: If more users come, it may crash.
AWS: Can automatically add more power (CPU/RAM) when traffic increases.

✔ 6. Maintenance
Your computer: You must fix hardware problems yourself.
AWS: Amazon manages hardware, cooling, power backup, etc.

✔ 7. Cost
Your computer: You buy it once, but using it as a server is risky.
AWS: You pay monthly or hourly based on usage

✔ 7. IP
Your computer: Ip can be chnaged with time , once you computer turns on , may be some diff ip , offs and ons , again different ip.
AWS: Dedicated IP.

*/

// * When a User Types a Domain Name (example: facebook.com)
/*

1️⃣ User types the URL in the browser (Client)

The browser starts the process:
Checks if the URL is valid
Separates protocol (HTTP/HTTPS), domain name, and path
Example:
https://facebook.com/home

2️⃣ Browser checks its cache for the IP

Before doing DNS lookup, the browser checks if it already knows the IP address:
Caches checked in order:
Browser cache
OS cache
Router cache
ISP DNS cache
If IP is found → Skip DNS lookup.

3️⃣ Browser sends DNS query if IP not found

Browser asks a DNS resolver (often your ISP or Google DNS) for the IP:
Query example:
👉 “What is the IP address of facebook.com?”
DNS resolver tries:
Root DNS servers
Top-Level Domain (TLD) servers (.com servers)
Authoritative DNS server (Facebook’s DNS)

4️⃣ DNS returns the IP address

Example response:
👉 157.240.xx.xxx
Now the browser knows exactly which server to contact.

5️⃣ Browser starts TCP connection with the server

To communicate reliably, the browser must create a connection.
Uses TCP 3-way handshake:
SYN
SYN-ACK
ACK
Now the client and server are officially connected.

6️⃣ (If HTTPS) Browser performs TLS/SSL handshake

For secure websites (HTTPS):
Browser and server exchange certificates
Browser verifies server's identity
Encryption keys are created
Secure session is established
Now communication is encrypted.

7️⃣ Browser sends HTTP request to the server

Technical format:

GET /home HTTP/1.1
Host: facebook.com
User-Agent: Chrome
Accept: text/html
The request asks for the webpage from the server.

8️⃣ Server receives the request and processes it

Server may:
Fetch HTML file
Run backend code (Node, PHP, Python, etc.)
Get data from databases
Check authentication
Then it builds the response.

9️⃣ Server sends back an HTTP response

And sends:
HTML
CSS
JavaScript
Images
 * 
 * 
 */
