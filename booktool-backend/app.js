const express = require('express');
const clientRouter = require('./routes/clientRoute')
const userRouter = require('./routes/userRoute');
const reservationRouter = require('./routes/reservationRoute');
const app = express();

//PARSE REQ BODY
app.use(express.json({limit: '10kb'}));

//REQ TIME MIDDLEWARE
app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   next();
})

//ROUTES
app.use('/api/v1/client', clientRouter)
app.use('/api/v1/reservation', reservationRouter)
app.use('/api/v1/user', userRouter)
app.all('*', (req, res, next) => {
   next(`Can't find this path`)
})

module.exports = app;
