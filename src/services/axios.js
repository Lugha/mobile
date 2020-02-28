import axios from "axios";

import config from "../../config";

const instance = token => {
  return axios.create({
    baseURL: "http://localhost:5001",
    timeout: 1000,
    headers: { Authorization: `Bearer ${token}` }
  });
};

const registerUser = payload => {
  return instance(null).post("/api/auth/local/register", payload);
};

const connectUser = payload => {
  return instance(null).post("/api/auth/local/login", payload);
};

const getUser = token => {
  return instance(token).get("/api/me");
};

export default {
  registerUser,
  connectUser,
  getUser
};
