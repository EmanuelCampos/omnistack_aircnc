const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-ezgp6.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use("/files/", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
