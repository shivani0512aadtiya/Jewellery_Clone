'use client'
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
