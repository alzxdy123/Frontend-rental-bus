import { AXIOS } from "../server";
import header from "../header";

export default {
  AuthLogin(data) {
    let config = {};
    config = header.authHeader();
    return AXIOS.post("/auth/login", data, config);
  },

  AuthLogout() {
    let config = {};
    config = header.authHeader();
    return AXIOS.get("/auth/logout", config);
  },

  AuthSignUp(data) {
    let config = {};
    config = header.authHeader();
    return AXIOS.post("/v1/register", data, config);
  },
};
