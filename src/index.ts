// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
// process.loadEnvFile("./.env"); //!node 21.7.1+ current version
// import connectDB from "./db/dbIndex.js";
import { app } from "./app";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

console.log(PORT, "sd");

// Handle unhandled promise rejections
// process.on("unhandledRejection", (reason, promise) => {
//   console.error("Unhandled Rejection at:", promise, "reason:", reason);
//   process.exit(1); // Exit the process with a non-zero status code
// });

// connectDB()
//   .then(() => {
//     app.on("error", (error) => {
//       console.error("Server error!-!-!", error);
//       process.exit(1);
//     });
app.listen(process.env.PORT || 8081, () => {
  console.log(`TS Server is running on port: ${PORT}\n`);
});
//   })
//   .catch((err: any) => {
//     console.error(`MongoDB connection failed!-!-! `, err);
//   });

/* ///;(async () => {})();

1.approach DB Connection

import { Express } from "express";
const app = Express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error" , (error) => {
      console.log("error", error);
      throw error
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("error", error);
    throw error;
  }
})();
*/
