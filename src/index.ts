import express, { Request, Response, Express } from "express";

import cors from "cors";
import connectMongoDB from "./configs/mongoose";
import env from "./env/env";
const app: Express = express();
app.use(cors());
app.use("/", (req: Request, res: Response) => {
  return res.json({
    name: "tng",
  });
});

const runServer = () => {
  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
  });
};

connectMongoDB(runServer);
