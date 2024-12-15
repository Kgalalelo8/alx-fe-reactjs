import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUsers = async ({ query, location, minRepos }) => {
  let searchQuery = query ? `${query}` : "";

  if (location) searchQuery += ` location:${location}`;
  if (minRepos) searchQuery += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(searchQuery)}`);
  return response.data.items; // Return list of users
};

