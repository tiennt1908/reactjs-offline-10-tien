import axios from "axios";

const Api = axios.create({
  baseURL: "http://wp-api.test/wp-json/",
});
export default Api;
