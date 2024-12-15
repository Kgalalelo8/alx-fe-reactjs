import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState(""); // State to track the input
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update query state as user types
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true); // Show loading
    setError(""); // Clear any previous errors
    setUserData(null); // Clear previous results

    try {
      const data = await fetchUserData(query); // Fetch user data
      setUserData(data); // Set user data in state
    } catch (err) {
      setError("Looks like we can't find the user."); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}

      {/* Conditionally render user data */}
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
