import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL+"/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

const updateResumeDetail = (id, data) =>
  axiosClient.put("/user-resumes/" + id, data);

const getResumeById = (id) =>
  axiosClient.get("/user-resumes/" + id + "?populate=*");

const deleteResumeById = (id) => axiosClient.delete("/user-resumes/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  updateResumeDetail,
  getResumeById,
  deleteResumeById,
};
