import {createContext, useState, useEffect, ReactNode} from "react";
import {onAuthStateChangedListener} from "../utils/firebase/config";
import {User} from 'firebase/auth';

export const UserContext = createContext<User | null>(null);

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};