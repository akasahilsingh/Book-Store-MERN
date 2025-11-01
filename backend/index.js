import express from "express";
import { MONGO_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import route from "./routes/books.routes.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get("/", (req, res) => {
  res.send("hello world kaise ho");
});

app.use("/books", route)


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Congrats you are connected to mongodb");
    app.listen(PORT, () => {
      console.log(`you are by chance connected to ${PORT} port`);
    });
  })
  .catch((error) => {
    console.log(`Not connected to mongodb ${error.message}`);
  });
