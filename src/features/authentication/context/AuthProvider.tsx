import React, { ReactNode, useState } from "react";

export interface AuthContextType {
  auth: boolean;
  setAuth: Function;
}

const authContext: AuthContextType = {
  auth: false,
  setAuth: () => { }
}
export const AuthContext = React.createContext<AuthContextType>(
  authContext
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [auth, setAuth] = useState(authContext.auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};
