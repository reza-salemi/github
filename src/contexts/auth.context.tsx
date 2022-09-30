import {createContext, useState, useEffect, ReactNode} from "react";
import {onAuthStateChangedListener} from "../utils/firebase/config";
import {User} from 'firebase/auth';
import {getCurrentUser} from "../api/user";
import {GithubUser} from "../types/user.type";

interface AuthContextInterface {
  firebaseUser: User | null,
  currentUser: GithubUser | null
}

export const AuthContext = createContext<AuthContextInterface>({
  firebaseUser: null,
  currentUser: null
});

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      setFirebaseUser(user)
      if (!user) {
        localStorage.removeItem('github-token');
      }
    });
    getCurrentUser().then(json => setCurrentUser(json));

    return unSubscribe;
  }, [firebaseUser,currentUser]);

  return <AuthContext.Provider value={{firebaseUser,currentUser}}>{children}</AuthContext.Provider>;
};