import axios from 'axios';

const token = localStorage.getItem("github-token");
const reqInstance = (!token) ?
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  }) :
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export default reqInstance;