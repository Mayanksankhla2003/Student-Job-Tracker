import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";

const sampleJobs = [
    {
        _id: 1,
        company: "Google",
        role: "SDE Intern",
        status: "Applied",
        appliedDate: "2025-04-01",
        link: "https://careers.google.com",
    },
    {
        _id: 2,
        company: "Amazon",
        role: "Backend Developer Intern",
        status: "Interview",
        appliedDate: "2025-04-02",
        link: "https://amazon.jobs",
    },
];

const Home = () => {
    const [jobs, setJobs] = useState(sampleJobs);
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <div className="w-full h-full">
            <h1 className="text-3xl font-bold p-15">Student Job Tracker</h1>
            <FilterBar />
            <button
                onClick={() => {
                    setIsFormOpen(true);
                }}
                className="bg-blue-600 text-white px-4 rounded-xl hover:bg-blue-700 py-4 w-80 mx-15 mt-5 shadow-md cursor-pointer"
            >
                Add Job Application
            </button>
            <div className="space-y-4 mt-5">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
            {isFormOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ">
                    <JobForm
                        isFormOpen={isFormOpen}
                        setIsFormOpen={setIsFormOpen}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Home;
