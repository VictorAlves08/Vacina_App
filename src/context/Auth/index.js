import React, {useState, createContext} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isSignedIn, setSignedIn] = useState(false);

    const sigIn = async () => {
        setIsLoading(true);

        setSignedIn(true);
        setUserData({id: 1, name: 'Victor', email: 'victor@gmail.com'});

        setIsLoading(false);
    };

    const sigOut = async () => {
        setIsLoading(true);

        setSignedIn(false);
        setUserData(null);

        setIsLoading(false);
    };

    return (
        <AuthContext.Provider
            value={{isSignedIn, userData, isLoading, sigIn, sigOut}}>
            {children}
        </AuthContext.Provider>
    );
};
