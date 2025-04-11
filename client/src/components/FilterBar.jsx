import React from "react";

const FilterBar = ({ filter, setFilter, resetFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "status") {
            setFilter({ status: value, applicationDate: "" });
        } else if (name === "applicationDate") {
            setFilter({ status: "", applicationDate: value });
        }
    };
    return (
        <div className="w-200 mx-15 flex justify-around border-2 border-gray-300 rounded-lg p-3 bg-white shadow-md">
            <select
                className="w-[40%] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-2 focus:border-blue-500 p-2"
                name="status"
                value={filter.status}
                onChange={handleChange}
            >
                <option value="">Filter by Status</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
            </select>
            <input
                type="date"
                className="w-[40%] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-2 focus:border-blue-500 p-2 text-black "
                name="applicationDate"
                value={filter.applicationDate}
                onChange={handleChange}
            />
            <button
                onClick={resetFilters}
                className="ml-4 px-3 py-2 bg-blue-300 hover:bg-blue-500 rounded text-md"
            >
                Reset
            </button>
        </div>
    );
};

export default FilterBar;
