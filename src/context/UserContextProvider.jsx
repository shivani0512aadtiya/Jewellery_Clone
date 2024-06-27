'use client'
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import Cookies from "js-cookie";

const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token')
        setIsLoggedIn(!!token);
    }, []);

    const logout = () => {
        Cookies.remove('token')
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
