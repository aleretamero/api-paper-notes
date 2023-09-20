import mongoose from "mongoose";

export const run = async () => {
  console.log("Connecting...");

  await mongoose.connect(process.env.DB_URI!, {
    dbName: process.env.DB_NAME,
    auth: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    retryWrites: true,
    w: "majority",
  });

  console.log("Connection successfully 😎");
};
