import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch user data from the GitHub API.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} User data from the API.
 */
export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
