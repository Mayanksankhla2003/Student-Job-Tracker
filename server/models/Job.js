const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        comanyName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["applied", "interview", "offer", "rejected"],
            default: "applied",
        },
        applicationDate: {
            type: Date,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
