import Functions from "@/tools/Functions";
// import SessionCustom from "@/tools/SessionCustom";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: undefined,
  }),
  actions: {
    logout() {
      // let ReadLang = Functions.ReadSessionCustom('language');
      localStorage.clear();
      // SessionCustom.Save('language', ReadLang);
      this.user = undefined;
      Functions.ToPage("/login");
    },
    login(user) {
      this.user = user;
    },
  },
  getters: {
    loggedUser() {
      return this.user;
    },
    isAuth() {
      return !!this.user;
    },
  },
});
