import SessionCustom from "./SessionCustom";
import router from "@/router";

export default {
  GenerateChaptcha(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  ToPage(page) {
    SessionCustom.Save("page", page);
    return router.replace(page).catch((error) => {
      return error;
    });
  },
};
