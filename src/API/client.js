import axios from "axios";

const apiDevHost = `http://${process.env.REACT_APP_DEV_SERVER_URL}`;
const apiProdHost = `http://${process.env.REACT_APP_PROD_SERVER_URL}`;

export const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? apiDevHost : apiProdHost,
});
