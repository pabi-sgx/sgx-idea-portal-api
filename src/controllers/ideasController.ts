import { Request, Response } from 'express';

import Idea from '../model/Idea';

export const getIdeas = async (req: Request, res: Response) => {
    try {
        const ideas = await Idea.find();
        if (!ideas) {
            return res.status(404).json({
                success: false,
                message: 'No ideas found'
            });
        }
        res.status(200).json({
            success: true,
            data: ideas
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const saveIdea = async (req: Request, res: Response) => {
    try {
        const newIdea = new Idea(req.body);
        await newIdea.save();
        res.status(201).json({
            success: true,
            message: 'Idea saved successfully',
            data: newIdea
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const updateIdea = async (req: Request, res: Response) => {
    try {
        const ideaId = req.params.id;
        const updatedIdea = await Idea.findByIdAndUpdate(ideaId, req.body, { new: true });
        if (!updatedIdea) {
            return res.status(404).json({
                success: false,
                message: 'Idea not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Idea updated successfully',
            data: updatedIdea
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const getIdea = async (req: Request, res: Response) => {
    try {
        const ideaId = req.params.id;
        const idea = await Idea.findById(ideaId);
        if (!idea) {
            return res.status(404).json({
                success: false,
                message: 'Idea not found'
            });
        }
        res.status(200).json({
            success: true,
            data: idea
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

