import {FaCodepen, FaUserFriends, FaUsers} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {getAuthUserRepos, getUser, getUserRepos} from "../api/user";
import {GithubUser} from "../types/user.type";
import {RepoType} from "../types/repo.type";
import RepoList from "../components/repos/repo-list";
import Pagination from "../components/pagination";

const UserProfile = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const authUsername = localStorage.getItem('username');
  const {username} = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    if (username) {
      getUser(username).then(json => {
        setLoading(false);
        setUser(json);
      }).catch(error => {
        if (error.response.status === 404) {
          Navigate('/notfound');
        }
      });
    }
    if (username === authUsername) {
      getAuthUserRepos(page).then(json => setRepos(json));
    } else {
      getUserRepos(username).then(json => setRepos(json));
    }

  }, [username, Navigate, authUsername, page]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={user?.avatar_url} alt="User Avatar"/>
              </figure>
            </div>
          </div>
          <div className="col-span-3">
            <div className="md:flex justify-between mb-6 items-center">
              <div>
                <h1 className="text-3xl card-title">
                  {user?.name}
                  <div className="ml-2 mr-1 badge badge-success">
                    {user?.type}
                  </div>
                  {user?.hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p>{user?.bio}</p>
              </div>
              <div className="mt-4 card-actions">
                <a href={user?.html_url} target="_blank" rel="noreferrer"
                   className="btn btn-outline dark:hover:bg-gray-900 hover:bg-gray-600">
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats mb-4">
              {user?.location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg">{user?.location}</div>
                </div>
              )}
              {user?.blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg">
                    <a href={`https://${user?.blog}`} target="_blank" rel="noreferrer">{user?.blog}</a>
                  </div>
                </div>
              )}
              {user?.twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg">
                    <a href={`https://twitter.com/${user?.twitter_username}`} target="_blank" rel="noreferrer">
                      {user?.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full py-1 rounded-lg shadow-md bg-base-100 stats">
              <div className="stat flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaUsers className="text-xl md:text-2xl"/>
                  <span className="md:text-xl text-lg">Followers</span>
                </div>
                <span className="md:text-2xl text-xl font-bold">{user?.followers}</span>
              </div>

              <div className="stat flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaUserFriends className="text-xl md:text-2xl"/>
                  <span className="md:text-xl text-lg">Following</span>
                </div>
                <span className="md:text-2xl text-xl font-bold">{user?.following}</span>
              </div>

              <div className="stat flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaCodepen className="text-xl md:text-2xl"/>
                  <span className="md:text-xl text-lg">Public Repos</span>
                </div>
                <span className="md:text-2xl text-xl font-bold">{user?.public_repos}</span>
              </div>
            </div>
          </div>
        </div>

        <RepoList repos={repos}/>
        <div className="flex justify-center mt-4">
          <Pagination
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default UserProfile;