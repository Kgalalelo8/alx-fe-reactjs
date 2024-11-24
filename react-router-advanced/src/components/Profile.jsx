import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> | <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

export default Profile;
