const express = require('express');
const cors = require('cors');
const clientRouter = require('./routes/clientRoute')
const userRouter = require('./routes/userRoute');
const reservationRouter = require('./routes/reservationRoute');
const apartmentRouter = require('./routes/apartmentRoute');
const messageRouter = require('./routes/messageRoute');
const app = express();
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./controllers/errorController');

app.use(cors());

//PARSE REQ BODY
app.use(express.json({limit: '10kb'}));
app.use(cookieParser());

//REQ TIME MIDDLEWARE
app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   next();
})

//ROUTES
app.use('/api/v1/client', clientRouter)
app.use('/api/v1/reservation', reservationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/apartment', apartmentRouter);
app.use('/api/v1/message', messageRouter);


app.all('*', (req, res, next) => {
   next(`Can't find this path`)
})




app.use(globalErrorHandler);
module.exports = app;
