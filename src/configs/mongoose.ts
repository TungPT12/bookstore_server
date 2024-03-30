import mongoose from "mongoose";

import env from "../env/env";
// import { env } from "process";

const uri = `mongodb+srv://${env.userMongoDB}:${env.passwordMongoDB}@mongodb.y8qiteb.mongodb.net/${env.databaseMongo}?retryWrites=true&w=majority`;

const connectMongoDB = (callback: any) => {
  mongoose
    .connect(uri)
    .then(() => {
      callback();
      console.log("Connected");
    })
    .catch((error: Error) => {
      console.log(error.message);
      console.log("Connect Fail");
    });
};

export default connectMongoDB;
