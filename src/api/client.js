import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_BASE_URL} || ""}`;

export const api = axios.create({ baseURL });

// OPTIONAL: attach bearer token (when you wire Okta later)
/*api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token"); // placeholder for now
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});*/

export default api;