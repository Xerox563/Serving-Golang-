const adminAuth = (req, res, next) => {
  console.log("Admin Auth Middleware Called !!");
  // auth logic
  const token = "xyz";
  const authorized = token === "xyz";
  if (!authorized) {
    res.status(401).send("Unauthorized Request !!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User Auth Middleware Called !!");
  // auth logic
  const token = "xyz";
  const authorized = token === "xyz";
  if (!authorized) {
    res.status(401).send("Unauthorized Request !!");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
