// import axios from "axios";
// import Cookies from "js-cookie";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/api", // Ensure this points to the correct base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = Cookies.get("session_id");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;

import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure cookies are sent with requests
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("session_id");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
