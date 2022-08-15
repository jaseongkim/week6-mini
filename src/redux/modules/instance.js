import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.125.110/api/",
});
const token = localStorage.getItem("token");
instance.defaults.headers.common["authorization"] = token
  ? `${token}`
  : null;
export default instance;
