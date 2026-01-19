require("dotenv").config();

const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
  Bucket$,
} = require("@aws-sdk/client-s3");
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

async function putObject(filename, ContentType) {
  const command = new PutObjectCommand({
    Bucket: "amit.s3-private",
    Key: `uploads/user-uploads/${filename}`,
    ContentType: ContentType,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  return url;
}

// Get Object URL
async function callGet() {
  const url = await getObject("uploads/user-uploads/image-1768830815536.jpeg");
  console.log("Pre-signed URL:", url);
}
// callGet();

// Put Object URL
async function callPut() {
  const url = await putObject(`image-${Date.now()}.jpeg`, "image/jpeg");
  console.log("URL for Uploading: ", url);
}

// callPut();

async function listObjects() {
  const command = new ListObjectsV2Command({
    Bucket: "amit.s3-private",
    Key: "/",
  });
  const res = await s3Client.send(command);
  console.log(res);
}

async function justTest() {
  await listObjects();
}

justTest();
