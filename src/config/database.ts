import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/sgx-idea-portal';

export const connectDatabase = () => {
  mongoose.connect(DB_URL)
    .then(connection => console.log(`MongoDB database connected to host ${connection.connection.host}`))
    .catch(err => console.log(err));
}