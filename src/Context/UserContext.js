import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('User');
  
    return (
      <UserContext.Provider value={{ userName, setUserName }}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserContext;