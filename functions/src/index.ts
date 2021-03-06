import "./utils/sentry"; // Should always be at the top

import * as functions from "firebase-functions";
import app from "./app";

const api = functions
  .region("us-central1")
  .runWith({
    memory: "128MB",
    timeoutSeconds: 30
  })
  .https.onRequest(app);

const hello = functions
  .region("asia-east2")
  .runWith({
    memory: "128MB",
    timeoutSeconds: 10
  })
  .https.onRequest((req, res) => {
    res.send('hello world! 🐶');
  });

module.exports = {
  api,
  hello,
};
