import { Request, Response } from 'express';

export const getIdeas = (req: Request, res: Response) => {
    // Dummy response
    const dummyIdeas = [
        { id: 1, title: 'Improve customer service', description: 'Implement AI chatbot for 24/7 support' },
        { id: 2, title: 'Eco-friendly packaging', description: 'Switch to biodegradable materials for all product packaging' },
        { id: 3, title: 'Employee wellness program', description: 'Introduce yoga and meditation sessions for stress relief' }
    ];

    res.status(200).json({
        success: true,
        data: dummyIdeas
    });
};

export const saveIdea = (req: Request, res: Response) => {
    // Dummy response
    const newIdea = {
        id: 4,
        title: 'New Idea',
        description: 'This is a placeholder for a new idea'
    };

    res.status(201).json({
        success: true,
        message: 'Idea saved successfully',
        data: newIdea
    });
};

export const updateIdea = (req: Request, res: Response) => {
    // Dummy response
    const updatedIdea = {
        id: req.params.id,
        title: 'Updated Idea',
        description: 'This is a placeholder for an updated idea'
    };

    res.status(200).json({
        success: true,
        message: 'Idea updated successfully',
        data: updatedIdea
    });
};

export const getIdea = (req: Request, res: Response) => {
    const ideaId = parseInt(req.params.id);

    // Dummy response
    const dummyIdea = {
        id: ideaId,
        title: 'Specific Idea',
        description: 'This is a placeholder for a specific idea',
        submittedBy: 'John Doe',
        dateSubmitted: '2024-08-15',
        status: 'Under Review'
    };

    res.status(200).json({
        success: true,
        data: dummyIdea
    });
};
