import express from 'express';
import { ideasRouter } from './routes/ideasRoute';
import { healthRouter } from './routes/healthRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json())

// Register the router
const context = '/idea-portal';
app.use(`${context}/ideas`, ideasRouter);
app.use(`${context}/health`, healthRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000. Health check on /idea-portal/health');
});
