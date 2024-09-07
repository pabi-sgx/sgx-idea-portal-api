import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/sgx-idea-portal';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Successfully connected to MongoDB with URL ${DB_URL}`))
  .catch(err => console.log(err));
