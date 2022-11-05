import RepoItem from "./repo-item";
import {RepoType} from "../../types/repo.type";

interface ReposPropType {
  repos: RepoType[];
}

const RepoList = ({repos}: ReposPropType) => {
  return (
    <div className="rounded-lg shadow-lg card dark:bg-base-100 bg-gray-300">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Repositories
        </h2>
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  );
};

export default RepoList;