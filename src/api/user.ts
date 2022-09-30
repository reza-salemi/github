import reqInstance from "../lib";

export const getCurrentUser = async () => {
  const response = await reqInstance.get(`/user`);
  return response.data;
};

export const getUser = async (username: string | undefined) => {
  const response = await reqInstance.get(`/users/${username}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await reqInstance.get("/users");
  return response.data;
};

export const getUserRepos = async (username?:string) => {
  const response = await reqInstance.get(`/users/${username}/repos`);
  return response.data;
};
