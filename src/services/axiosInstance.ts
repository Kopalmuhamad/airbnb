import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://auf.my.id",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MTY1NTQ3NzQsInVzZXJJZCI6MTd9.IUTn49Qg44B1R6KFnJu9IsHDJqI_r3mtYvI9esq5vo4"; // Use environment variable for the token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
