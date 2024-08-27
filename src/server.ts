import express from 'express';
import { ideasRouter } from './routes/ideasRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json())

// Register the router
app.use('/idea-portal/ideas', ideasRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
