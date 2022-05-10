require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

app.listen(process.env.PORT, () => {
  console.log(`Application was launched on the port ${process.env.PORT}`);
});
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("Successfully connected to the database!"));
