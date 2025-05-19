//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "http://localhost:8081",
});

export default Api;
