import express from 'express';

// Create health check router
export const healthRouter = express.Router();
healthRouter.get('/', (req, res) => {
    res.status(200).json({ status: 'UP' });
});
