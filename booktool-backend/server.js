const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
const DB = 'mongodb+srv://brucki:Pulpfiction900!@cluster0.ggumd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
dotenv.config({ path: './config.env' });



app.listen(3000, () => {console.log(`Application has been running on port 3000`);});
mongoose
  .connect(DB, {
    
  })
  .then(() => console.log('DB connection successful!'));
