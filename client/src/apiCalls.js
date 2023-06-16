import Axios from "axios";

export const signupUser = ({ name, username, password }) =>
  Axios.post("/api/auth/signup", { name, username, password })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const loginUser = ({ username, password }) =>
  Axios.post("/api/auth/login", { username, password })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const fetchCompany = () => {
  const token = localStorage.getItem("token");

  return Axios.request({
    method: "get",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => [res.data.data, null])
    .catch((e) => [null, e]);
};

export const createCompany = (data) => {
  const token = localStorage.getItem("token");

  return Axios.request({
    method: "put",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { company: data },
  })
    .then((res) => [res.data.data, null])
    .catch((e) => [null, e]);
};

export const updateCompany = (data) => {
  const token = localStorage.getItem("token");

  return Axios.request({
    method: "patch",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { company: data },
  })
    .then((res) => [res.data.data, null])
    .catch((e) => [null, e]);
};
