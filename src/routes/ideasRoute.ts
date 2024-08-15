import express from 'express';
import {getIdeas, saveIdea, updateIdea, getIdea} from '../controllers/ideasController';

// Create a router
export const ideasRouter = express.Router();
// Define routes with '/ideas' as root path
ideasRouter.get('/ideas', getIdeas);
ideasRouter.post('/ideas', saveIdea);
ideasRouter.put('/ideas/:id', updateIdea);
ideasRouter.get('/ideas/:id', getIdea);
