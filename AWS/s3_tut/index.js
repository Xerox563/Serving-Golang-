require("dotenv").config();

const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});

async function getObject(key) {
  const command = new GetObjectCommand({
    Bucket: "amit.s3-private",
    Key: key,
  });

  // URL valid for 60 seconds
  const url = await getSignedUrl(s3Client, command, {
    expiresIn: 600,
  });

  return url;
}

async function init() {
  const url = await getObject("bmwm4.jpg");
  console.log("Pre-signed URL:", url);
}

init();
