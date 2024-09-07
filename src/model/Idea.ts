
import mongoose, { Schema, Document } from 'mongoose';

export interface IIdea extends Document {
    title: string;
    description: string;
    fullName: string;
    employeeID: string;
    status: string;
}

const IdeaSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    fullName: { type: String, required: true },
    employeeID: { type: String, required: true},
    status: { type: String, required: true }
});

export default mongoose.model<IIdea>('Idea', IdeaSchema);


