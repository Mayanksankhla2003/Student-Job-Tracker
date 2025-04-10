import React from "react";

const FilterBar = () => {
    return (
        <div className="w-200 mx-15 flex justify-around border-2 border-gray-300 rounded-lg p-3 bg-white shadow-md">
            <select
                className="w-[40%] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-2 focus:border-blue-500 p-2"
                name="status"
            >
                <option>Filter by Status</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
            </select>
            <input
                type="date"
                className="w-[40%] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-2 focus:border-blue-500 p-2 text-black "
                name="date"
            />
        </div>
    );
};

export default FilterBar;
