import express from 'express';
import {getIdeas, saveIdea, updateIdea, getIdea} from '../controllers/ideasController';

// Create a router
export const ideasRouter = express.Router();
// Define routes with '/ideas' as root path
ideasRouter.get('/', getIdeas);
ideasRouter.post('/', saveIdea);
ideasRouter.put('/:id', updateIdea);
ideasRouter.get('/:id', getIdea);
