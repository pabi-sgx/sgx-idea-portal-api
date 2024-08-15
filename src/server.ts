import express from 'express';

const app = express();

app.get('/welcome', (req, res) => {
  res.json({ message: 'Welcome to the SGX Idea Portal API!' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});