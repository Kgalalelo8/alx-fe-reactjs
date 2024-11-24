import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h3>You are logged in!</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>You are logged out!</h3>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
