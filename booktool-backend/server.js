const dotenv = require('dotenv').config()
const app = require('./app');
const mongoose = require('mongoose');



app.listen(8000, () => {console.log(`Application has been running on port ${process.env.PORT}`);});
mongoose
  .connect(process.env.DATABASE, {
    
  })
  .then(() => console.log('DB connection successful!'));
