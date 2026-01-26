import React, { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
    },
    permission: {
      canEdit: true,
      canDelete: false,
      canView: true,
    },
    theme: {
      darkMode: true,
      fontSize: "16px",
    },
  });

  const toggleTheme = () => {
    setUserData((prev) => ({
      ...prev,
      theme: { ...prev.theme, darkMode: !prev.theme.darkMode },
    }));
  };

  const value = {
    ...userData,
    toggleTheme,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
