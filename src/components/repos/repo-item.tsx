import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from "react-icons/fa";

const RepoItem = ({repo}: any) => {
  return (
    <div className="mb-2 rounded-md card dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-600 bg-base-100">
      <div className="card-body">
        <div className="md:flex justify-between">
          <h3 className="mb-2 text-xl font-semibold">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <FaLink className="inline mr-1"/> {repo.name}
            </a>
          </h3>
          <div>
            <div className="mr-2 badge badge-info badge-lg">
              <FaEye className="mr-2"/> {repo.watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
              <FaStar className="mr-2"/> {repo.stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
              <FaInfo className="mr-2"/> {repo.open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
              <FaUtensils className="mr-2"/> {repo.forks}
            </div>
          </div>
        </div>
        <p className="mb-3">{repo.description}</p>
      </div>
    </div>
  );
};
export default RepoItem;