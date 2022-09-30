import {signInWithGitHubPopup} from "../utils/firebase/config";
import {GithubAuthProvider} from "firebase/auth";

const SignIn = () => {
  const logGitHubUser = async () => {
    await signInWithGitHubPopup().then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      if (typeof token === "string") {
        localStorage.setItem('github-token', token);
      }
    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
  };
  return (
    <button className="btn btn-sm btn-ghost" onClick={logGitHubUser}>SIGN IN</button>
  )
}

export default SignIn;