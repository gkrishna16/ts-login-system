import express, { Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

// app.use("/", async function (req: Request, res: Response) {
//   try {
//     res.json({ msg: `you gonna make it` });
//   } catch (error) {
//     res.sendStatus(400);
//   }
// });

server.listen(8080, function () {
  console.log(`Server running on http://localhost:8080/`);
});

const MONGO_URL = `mongodb://localhost:27017/ts-node`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL, {
  dbName: "ts-node",
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
// .then(function () {
//   console.log(`database connected`);
// })
// .catch((err) => console.log(err));
mongoose.connection.on(`error`, function (error: Error) {
  console.log(error);
});

app.use(`/`, router());
