const mongoose = require('mongoose');
//const config = require('config');
const db =
  'mongodb+srv://admin:admin@cluster0-k3qmq.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
