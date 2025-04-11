import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getAllJobs = async () => {
    const res = await axios.get(`${API}/list-jobs`);
    return res.data;
};

export const createJob = async (job) => {
    const res = await axios.post(`${API}/add-job`, job);
    return res.data;
};

export const updateJob = async (id, job) => {
    const res = await axios.put(`${API}/update-job/${id}`, job);
    return res.data;
};

export const deleteJob = async (id) => {
    const res = await axios.delete(`${API}/delete-job/${id}`);
    return res.data;
};
