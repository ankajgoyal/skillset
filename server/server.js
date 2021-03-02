const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const mongoDB = process.env.DATABASE;

const app = require("./app");

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected successfully"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running successfully on ${port}`);
});
