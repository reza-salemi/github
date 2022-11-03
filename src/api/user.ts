import reqInstance from "../lib";

export const getUser = async (username: string) => {
  const response = await reqInstance.get(`/users/${username}`);
  return response.data;
};


export const getUserRepos = async (username?: string) => {
  const response = await reqInstance.get(`/users/${username}/repos`);
  return response.data;
};

export const getAuthUserRepos = async () => {
  const response = await reqInstance.get(`/user/repos`);
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
