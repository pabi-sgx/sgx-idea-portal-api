
import mongoose, { Schema, Document } from 'mongoose';

export interface IIdea extends Document {
    id: number;
    title: string;
    description: string;
    createdBy: string;
    employeeID: string;
    dateSubmitted: Date;
    status: string;
}

const IdeaSchema: Schema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true, validate: (value: string) => value.length >= 100 },
    createdBy: { type: String, required: true },
    employeeID: { type: String, required: true, validate: /^SG.*/ },
    dateSubmitted: { type: Date, required: true },
    status: { type: String, required: true }
});

export default mongoose.model<IIdea>('Idea', IdeaSchema);


