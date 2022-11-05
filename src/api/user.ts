import reqInstance from "../lib";

export const getUser = async (username: string) => {
  const response = await reqInstance.get(`/users/${username}`);
  return response.data;
};


export const getUserRepos = async (username?: string) => {
  const response = await reqInstance.get(`/users/${username}/repos?sort=created`);
  return response.data;
};

export const getAuthUserRepos = async (page:number) => {
  const response = await reqInstance.get(`/user/repos?sort=created&per_page=10&page=${page}`);
  return response.data;
};

export const searchRepo = async (params: string) => {
  const response = await reqInstance.get("https://api.github.com/search/repositories", {
    params: {
      q: params
    }
  });
  return response.data;
};
