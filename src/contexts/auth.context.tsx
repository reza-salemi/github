import {createContext, useState, useEffect, ReactNode} from "react";
import {onAuthStateChangedListener,signInWithGitHubPopup} from "../utils/firebase/config";
import {User,getAdditionalUserInfo,GithubAuthProvider} from 'firebase/auth';

interface AuthContextInterface {
  firebaseUser: User | null,
  logGitHubUser: () => void;

}

export const AuthContext = createContext<AuthContextInterface>({
  firebaseUser: null,
  logGitHubUser: () => null
});

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  const logGitHubUser = () => {
    signInWithGitHubPopup().then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const details = getAdditionalUserInfo(result);
      if (typeof token === "string") {
        localStorage.setItem('github-token', token);
        // @ts-ignore
        localStorage.setItem('username', details?.username)
      }
    }).catch((error) => {
      console.log(error.message)
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      setFirebaseUser(user);
      if (!user) {
        localStorage.removeItem('github-token');
        localStorage.removeItem('username');
      }
    });
    return unSubscribe;
  }, []);

  return <AuthContext.Provider value={{firebaseUser,logGitHubUser}}>{children}</AuthContext.Provider>;
};