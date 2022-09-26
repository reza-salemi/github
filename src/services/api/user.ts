import {api} from "../core";

export const getUsers = async () => {
  const response = await api.get("/users",{
    headers:{
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  });
  return response.data;
};

