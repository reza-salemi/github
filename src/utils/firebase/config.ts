import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAe0BhemjER5tUTlncMaeYNdUAG-sZt4fo",
  authDomain: "github-c1171.firebaseapp.com",
  projectId: "github-c1171",
  storageBucket: "github-c1171.appspot.com",
  messagingSenderId: "995225581244",
  appId: "1:995225581244:web:6e9b2de122e560efb8c2b9"
};

initializeApp(firebaseConfig);

const provider = new GithubAuthProvider();
provider.addScope('repo');
provider.addScope('user');
provider.addScope('gist');

export const auth = getAuth();
export const signInWithGitHubPopup = () => signInWithPopup(auth, provider);

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback:NextOrObserver<User>) => onAuthStateChanged(auth, callback);