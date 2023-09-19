import mongoose from "mongoose";

export const run = async () => {
  console.log("Connecting...");

  await mongoose.connect("mongodb://localhost:27017/", {
    dbName: "paper-notes",
    auth: {
      username: "root",
      password: "Senha#123",
    },
  });

  console.log("Connection database with successfully 😎");
};
