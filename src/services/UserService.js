import { AXIOS } from "./common/server";
import header from "./common/header";

export default {
  GetAllUser() {
    let config = {};
    config = header.authHeader();
    return AXIOS.get("/v1/user", config);
  },

  DeleteUser(id) {
    let config = {};
    config = header.authHeader();
    return AXIOS.delete("/v1/user/" + id, config);
  },

  GetUserByID(id) {
    let config = {};
    config = header.authHeader();
    return AXIOS.get("/v1/user/" + id, config);
  },
};
