import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name:{ type: String, required: true },
    number:{ type: String },
    schedule: { type: Schema.ObjectId, ref: "Scheduler" }
});

export default model('Contact', contactSchema);