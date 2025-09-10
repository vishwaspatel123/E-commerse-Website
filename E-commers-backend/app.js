const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productsRouter = require("./routes/productsRouter");
const authRouter = require("./routes/authRouter");
const databasepath =
  "mongodb+srv://vishwaspatel0305:Vishwas123@cluster0.b1csjsc.mongodb.net/E-commerse?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/product", productsRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(databasepath)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
