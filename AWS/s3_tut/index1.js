// const {
//   S3Client,
//   GetObjectCommand,
//   getObjectUrl,
// } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const s3Client = new S3Client({
//   region: "eu-north-1",
//   credentials: {
//     accessKeyId: "x",
//     secretAccessKey: "y",
//   },
// });

// async function getObject(key) {
//   const command = new GetObjectCommand({
//     Bucket: "amit.s3-private",
//     Key: key,
//   });
//   const url = await getSignedUrl(s3Client, command);
//   return url;
// }

// async function init() {
//   console.log("URL for bmw image: ", await getObjectUrl("bmwm4.jpg"));
// }

// init();

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "z",
  credentials: {
    accessKeyId: "x",
    secretAccessKey: "y",
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
