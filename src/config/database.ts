import { connect } from "mongoose";

export const run = async () => {
  await connect("mongodb://localhost/javascriptNote");
  console.log("Connection with database successfully 😎");
};
