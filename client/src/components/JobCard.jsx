import React from "react";

const JobCard = ({ job }) => {
    const statusColors = {
        Applied: "bg-blue-100 text-blue-800",
        Interview: "bg-yellow-100 text-yellow-800",
        Offer: "bg-green-100 text-green-800",
        Rejected: "bg-red-100 text-red-800",
    };
    return (
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center mx-15 ">
            <div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-gray-700">{job.role}</p>
                <p className="text-sm text-gray-500">
                    Applied on: {job.appliedDate}
                </p>
                <a
                    href={job.link}
                    className="text-blue-500 text-sm underline"
                    target="_blank"
                >
                    Job Link
                </a>
                <div
                    className={`mt-2 inline-block px-4 mx-5 py-1 rounded-full text-xs ${
                        statusColors[job.status]
                    }`}
                >
                    {job.status}
                </div>
            </div>
            <div className="flex gap-3 text-xl">
                <button className="text-yellow-500 hover:text-yellow-600">
                    ✏️
                </button>
                <button className="text-red-500 hover:text-red-600">🗑️</button>
            </div>
        </div>
    );
};

export default JobCard;
