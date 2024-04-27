import SessionCustom from "@/tools/SessionCustom";

export default {
  authHeader() {
    let token = SessionCustom.Read("token");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    return config;
  },
};
