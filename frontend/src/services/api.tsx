//import axios
import axios from "axios";

//import js-cookie
import Cookies from "js-cookie";

const Api = axios.create({
  //set default endpoint API
  baseURL: "http://localhost:8081",
});

//set default header
Api.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`;

export default Api;
