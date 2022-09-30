import {FaGithub} from "react-icons/fa";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {userSignOut} from "../../utils/firebase/config";
import {AuthContext} from "../../contexts/auth.context";
import SearchBar from "../search";
import ToggleTheme from "../toggle-theme";
import SignIn from "../sign-in";

const Header = () => {
  const {firebaseUser,currentUser} = useContext(AuthContext);

  return (
    <header className="dark:bg-neutral mb-8 bg-blue-500 text-neutral-content">
      <nav className="navbar container mx-auto">
        <div className="flex-1 gap-3">
          <Link to="/">
            <FaGithub className="text-3xl dark:hover:bg-gray-600 hover:bg-blue-700 rounded-full"/>
          </Link>
          <SearchBar/>
        </div>

        <div className="flex-none gap-1">
          {!firebaseUser ?
            (<div className="form-control">
                <SignIn />
            </div>) :
            (<div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={firebaseUser.photoURL || ""} alt="UserProfile Avatar"/>
                </div>
              </label>
              <ul tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content dark:bg-neutral bg-blue-500 rounded-box w-52 text-neutral-content">
                <li>
                  <Link to={`/user/${currentUser?.login}`} className="justify-between">
                    User profile
                  </Link>
                </li>
                <li onClick={userSignOut}><span>Logout</span></li>
              </ul>
            </div>)
          }
          <ToggleTheme/>
        </div>
      </nav>
    </header>
  );
};

export default Header;