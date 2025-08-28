const mongoose = require('mongoose');

const connectDB = (url) => {
  console.log('[connectDB] Using URI:', url); 
  return mongoose.connect(url);               
}
module.exports = connectDB;
