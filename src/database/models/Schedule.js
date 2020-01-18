import { Schema, model } from 'mongoose';

const scheduleSchema = new Schema({
    name:{ type: String, required: true },
    user:{ type: String },
    user: { type: Schema.ObjectId, ref: "User" }
});

export default model('Schedule', scheduleSchema);