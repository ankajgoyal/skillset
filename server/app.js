const express = require("express");
const cors = require("cors");

const router = require("./routes/comments");

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/api/comment", router);

module.exports = app;
