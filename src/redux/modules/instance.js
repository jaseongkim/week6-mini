import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.125.110/api/",
});
export default instance;
