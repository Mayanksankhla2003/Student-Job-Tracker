const jobModel = require("../models/Job");

const addJob = async (req, res) => {
    let { companyName, role, status, applicationDate, link } = req.body;

    try {
        const job = await jobModel.create({
            companyName,
            role,
            status,
            applicationDate,
            link,
        });
        console.log("Job Created Successfully", job);

        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find();
        console.log(jobs);

        res.send(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { companyName, role, status, applicationDate, link } = req.body;
    console.log("🛠️ Update request body:", req.body);
    console.log("🛠️ Update job ID:", req.params.id);

    try {
        const job = await jobModel.findByIdAndUpdate(
            id,
            { companyName, role, status, applicationDate, link },
            { new: true }
        );
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        await jobModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addJob, listJobs, updateJob, deleteJob };
