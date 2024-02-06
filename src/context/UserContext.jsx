// UserContext.js
import { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [employer, setEmployer] = useState();
    const [userType, setUserType] = useState(""); // New state for user type (jobSeeker or employer)
    return (
        <userContext.Provider
            value={{
                user,
                setUser,
                employer,
                setEmployer,
                userType,
                setUserType,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(userContext);
    if (context === undefined) {
        throw new Error("Context is used outside");
    }
    return context;
};

export { useUser, UserProvider };
