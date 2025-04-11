const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["Applied", "Interview", "Offered", "Rejected"],
            default: "Applied",
        },
        applicationDate: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
