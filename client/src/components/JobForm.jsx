import React from "react";

const JobForm = ({ isFormOpen, setIsFormOpen }) => {
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };
    const isEdit = false;
    return (
        <form
            // onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-2xl w-[50%] mx-auto"
        >
            <div className="flex">
                <h2 className="text-2xl font-semibold mb-4 text-center w-full">
                    {isEdit ? "Edit Job Application" : "Add Job Application"}
                </h2>
                <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className=" text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    X
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    // value={"Google"}
                    // onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded-md w-full"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    // value={formData.role}
                    // onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded-md w-full"
                />
                <select
                    name="status"
                    // value={formData.status}
                    // onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded-md w-full"
                >
                    <option value="">Select Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <input
                    type="date"
                    name="appliedDate"
                    // value={formData.appliedDate}
                    // onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded-md w-full"
                />
                <input
                    type="url"
                    name="link"
                    placeholder="Application Link"
                    // value={formData.link}
                    // onChange={handleChange}
                    className="border px-3 py-2 rounded-md w-full"
                />
            </div>

            <button
                type="submit"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md block mx-auto"
            >
                {isEdit ? "Update Job" : "Add Job"}
            </button>
        </form>
    );
};

export default JobForm;
