import axios from "axios";

const api = axios.create({
  baseURL: "http://10.168.69.130:3333"
});

export default api;
