import express from "express";
import { PORT } from "./env";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
});
