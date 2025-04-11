const express = require("express");
const {
    addJob,
    listJobs,
    updateJob,
    deleteJob,
} = require("../controllers/jobControllers");

const router = express.Router();

router.post("/add-job", addJob);
router.get("/list-jobs", listJobs);
router.put("/update-job/:id", updateJob);
router.delete("/delete-job/:id", deleteJob);

module.exports = router;
