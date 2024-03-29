import axios from "axios";
import Cookies from 'js-cookie';

const Api = {
  call() {
    return axios.create({
      baseURL: "http://wp-api.test/wp-json/",
    });
  },
  callWithToken(token?: string) {
    const tkn = token ?? Cookies.get("token");
    return axios.create({
      baseURL: "http://wp-api.test/wp-json/",
      headers: { Authorization: "Bearer " + tkn },
    });
  }
};
export default Api;
