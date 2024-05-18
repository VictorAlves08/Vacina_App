import React, {useState, useEffect, createContext} from 'react';
import {DevSettings} from 'react-native';

export const AuthContext = createContext({
    isLoggedIn: false,
});

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        DevSettings.addMenuItem('Change Routes', () =>
            setIsLoggedIn(prevState => !prevState),
        );
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};
