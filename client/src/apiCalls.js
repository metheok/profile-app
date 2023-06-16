import Axios from "axios";

export const testPost = (data) =>
  Axios.post("/api", { body: { ...data } })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const signupUser = ({ name, username, password }) =>
  Axios.post("/api/auth/signup", { name, username, password })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const loginUser = ({ username, password }) =>
  Axios.post("/api/auth/login", { username, password })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const fetchCompany = ({ token }) =>
  Axios.request({
    method: "get",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const createCompany = ({ token, data }) =>
  Axios.request({
    method: "put",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const updateCompany = ({ token, data }) =>
  Axios.request({
    method: "patch",
    url: "/api/company",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);

export const transactWallet = ({ walletID, description, amount }) =>
  Axios.post("/api/transact/" + walletID, { description, amount })
    .then((res) => [res.data, null])
    .catch((e) => [null, e]);
