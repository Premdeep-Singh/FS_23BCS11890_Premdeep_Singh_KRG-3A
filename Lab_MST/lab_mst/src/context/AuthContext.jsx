import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(false);
    
    const login = () => {
        setUserAuth(true);
    }

    return (
        <AuthContext.Provider value={{ userAuth, setUserAuth, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}