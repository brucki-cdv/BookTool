const express = require("express");
const cors = require("cors");
const clientRouter = require("./routes/clientRoute");
const userRouter = require("./routes/userRoute");
const reservationRouter = require("./routes/reservationRoute");
const apartmentRouter = require("./routes/apartmentRoute");
const messageRouter = require("./routes/messageRoute");
const viewRouter = require("./routes/viewRouter");

const app = express();
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controllers/errorController");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(cors({ origin: "http://localhost:3000" }));

//PARSE REQ BODY
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

//REQ TIME MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//ROUTES
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/apartment", apartmentRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", viewRouter);

app.all("*", (req, res, next) => {
  next(`Can't find this path`);
});

app.use(globalErrorHandler);
module.exports = app;
