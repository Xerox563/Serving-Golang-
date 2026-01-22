// Topics [AWS]
/*
- cloudTrail : AWS ativity recorder. It keeps history of everything done in your aws account and creates a log entry of that .
What does CloudTrail record?
Examples of actions it logs:
- Someone created an S3 bucket
- Someone deleted a file from S3
- Someone started/stopped an EC2 instance
- Someone changed IAM permissions
- Someone generated a pre-signed URL
- Someone used your access keys

Each record includes:
👤 Who did it (IAM user / role)
🕒 When it happened
🌍 From where (IP address, region)
⚙️ What service (S3, EC2, IAM, etc.)
📄 What action (PutObject, GetObject, DeleteBucket…

Why important:
 - Security: if you data is leaked : who accessed it , when and from which ip.
 - Auditing: Prove compliance, Track employee actions and "who did this"
 - Debugging: In case of erros , Logs can help a lot to get the breakig point.

Two types of CloudTrail events (important)
1. Management Events (default, free)
 - These are control actions:
 - Create bucket
 - Delete bucket
 - Start EC2
 - Change IAM policy
👉 Enabled by default

2. Data Events (optional, paid)
 - These track actual data access:
 - Reading files from S3 (GetObject)
 - Uploading files to S3 (PutObject)-
 - Lambda function invocation
*/

/*
:: Whenever a file is uploaded to S3 → send me an email notification
S3 cannot send emails by itself.
 - So we connect it to another AWS service that can send emails.
There are two common ways:
:* WAY 1 : [S3 → SNS → Email]
- How this Works?
  - File uploaded to s3
  - s3 sends an event to SNS
  - SNS recieves the event and sends the email

  SETUP:
Step 1: Create an SNS Topic [Search SNS in Search Bar]
- Go to SNS
- Create topic (e.g. s3-upload-topic)
- Type: Standard

Step 2: Subscribe your Email
- Open the SNS topic
- Create subscription
- Protocol: Email
- Endpoint: your email
- Confirm the email (important)

Step 3: Configure S3 Event Notification [Open Bucket]
- Go to your S3 bucket
- Open Properties
- Scroll to Event notifications
- Create event notification
Choose:
- Event type: PUT (Object Created)
Destination: SNS topic
Prefix/Suffix (optional):
- .jpg
- .mp4
Add the AWN copied from Topics you created in SNS

WAY 2 (S3 → Lambda → Email (SES)
Use this when:
- You want custom email text
- You want file name, size, user info
- You want logic (filter users, DB, etc.)
*/

/*
- ACL
- Bucket Versioning
- Bucket Policy
- CORS
- Bucket/Management/Lifecycle rules
- Replication Rules
*/
