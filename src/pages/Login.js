import React from "react";
import Login from "../components/Login";
import ScrollToTop from "../components/ScrollToTop";

const LoginPage = ({ setIsAuthenticated, setUser, user }) => {
  return (
    <>
      <ScrollToTop />
      <Login
        setUser={setUser}
        setIsAuthenticated={setIsAuthenticated}
        user={user}
      />
    </>
  );
};

export default LoginPage;
