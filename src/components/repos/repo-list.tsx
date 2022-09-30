import RepoItem from "./repo-item";

const RepoList = ({repos}:any) => {
    return (
      <div className="rounded-lg shadow-lg card dark:bg-base-100 bg-gray-300">
          <div className="card-body">
              <h2 className="text-3xl my-4 font-bold card-title">
                  Repositories
              </h2>
              {repos?.map((repo:any) => (
                <RepoItem key={repo.id} repo={repo}/>
              ))}
          </div>
      </div>
    )
}

export default RepoList;