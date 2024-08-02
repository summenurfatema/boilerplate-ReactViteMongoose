import { createContext, useState } from 'react';


export const AuthContext = createContext()


const UserContext = ({ children }) => {

    const [loading, setLoading] = useState(true)


  //passable props
  const authInfo = { loading,setLoading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;