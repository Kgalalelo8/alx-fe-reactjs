import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const searchUsers = (query) => {
  return apiClient.get(`/search/users`, { params: { q: query } });
};
