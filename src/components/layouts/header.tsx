import {FaGithub} from "react-icons/fa";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {signInWithGitHubPopup, userSignOut} from "../../utils/firebase/config";

import {UserContext} from "../../contexts/user.context";
import SearchBar from "../search";

const Header = () => {
  const currentUser = useContext(UserContext);

  const logGitHubUser = async () => {
    await signInWithGitHubPopup();
  };

  return (
    <header className="bg-neutral text-neutral-content">
      <nav className="navbar container mx-auto">
        <div className="flex-1 gap-3">
          <Link to="/">
            <FaGithub className="text-3xl hover:bg-gray-600 rounded-full"/>
          </Link>
          <SearchBar/>
        </div>

        <div className="flex-none gap-1">
          {!currentUser ?
            (<div className="form-control">
              <button className="btn btn-sm btn-ghost" onClick={logGitHubUser}>SIGN IN</button>
            </div>) :
            (<div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={currentUser.photoURL || ""} alt="Profile Avatar"/>
                </div>
              </label>
              <ul tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52 text-neutral-content">
                <li>
                  <span className="justify-between">
                    Profile
                  </span>
                </li>
                <li onClick={userSignOut}><span>Logout</span></li>
              </ul>
            </div>)
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;