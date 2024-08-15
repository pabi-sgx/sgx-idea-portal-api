import express from 'express';
import ideasRouter from './routes';

const app = express();

// Use the router
app.use(ideasRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
