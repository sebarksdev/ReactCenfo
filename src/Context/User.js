import React, { useState } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(false);
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };