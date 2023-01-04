import Api from "./api";

const userService = {
  login(username, password) {
    return Api.call().post("jwt-auth/v1/token", {
      username,
      password,
    });
  },
  register(email, username, password, nickname) {
    return Api.call().post("wp/v2/users/register", {
      email,
      username,
      password,
      nickname,
    });
  },
  getMe(token) {
    return Api.callWithToken(token).get("wp/v2/users/me", {});
  },
};
export default userService;
