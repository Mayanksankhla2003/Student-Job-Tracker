import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";
import {
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
} from "../services/jobService";

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        role: "",
        status: "Applied",
        applicationDate: "",
        link: "",
    });

    const [jobs, setJobs] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [filter, setFilter] = useState({
        status: "",
        applicationDate: "",
    });

    const fetchJobs = async () => {
        const data = await getAllJobs();
        setJobs(data);
    };
    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSubmit = async (e) => {
        console.log("isEdit:", isEdit);

        e.preventDefault();
        try {
            if (isEdit) {
                await updateJob(formData._id, formData);
            } else {
                await createJob(formData);
            }
            resetForm();
            fetchJobs(); // Refresh list
        } catch (err) {
            console.error("Error submitting job:", err);
        }
    };

    const handleEdit = (job) => {
        setFormData(job);
        setIsEdit(true);
        setIsFormOpen(true);
    };

    // ✅ Delete a job
    const handleDelete = async (id) => {
        try {
            await deleteJob(id);
            fetchJobs();
        } catch (err) {
            console.error("Error deleting job:", err);
        }
    };

    const resetForm = () => {
        setFormData({
            companyName: "",
            role: "",
            status: "Applied",
            applicationDate: "",
            link: "",
        });
        setIsEdit(false);
        setIsFormOpen(false);
    };

    const resetFilters = () => {
        setFilter({ status: "", applicationDate: "" });
    };

    return (
        <div className="w-full h-full">
            <h1 className="text-3xl font-bold p-15">Student Job Tracker</h1>
            <FilterBar
                filter={filter}
                setFilter={setFilter}
                resetFilters={resetFilters}
            />
            <button
                onClick={() => {
                    setIsFormOpen(true);
                }}
                className="bg-blue-600 text-white px-4 rounded-xl hover:bg-blue-700 py-4 w-80 mx-15 mt-5 shadow-md cursor-pointer"
            >
                Add Job Application
            </button>
            <div className="space-y-4 mt-5">
                {jobs
                    .filter((job) => {
                        const statusFilter = filter.status.trim().toLowerCase();
                        const dateFilter = filter.applicationDate;

                        const jobStatus = job.status?.trim().toLowerCase();
                        const jobDate = job.applicationDate?.slice(0, 10); // match format

                        const matchStatus = statusFilter
                            ? jobStatus === statusFilter
                            : true;
                        const matchDate = dateFilter
                            ? jobDate === dateFilter
                            : true;

                        return matchStatus && matchDate;
                    })
                    .map((job) => (
                        <JobCard
                            key={job._id}
                            job={job}
                            onUpdate={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
            </div>
            {isFormOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ">
                    <JobForm
                        isFormOpen={isFormOpen}
                        setIsFormOpen={setIsFormOpen}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        isEdit={isEdit}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Home;
