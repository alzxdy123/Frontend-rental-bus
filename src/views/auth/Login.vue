<template>
  <div class="login-container">
    <div class="col-4 border border-black px-5 py-5">
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="email"
            class="form-control"
            id="password"
            name="password"
            v-model="password"
          />
        </div>
        <div class="btn btn-primary col-12 mt-2" @click="login()">Login</div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/Authentication/AuthService";
import Functions from "@/tools/Functions";
import SessionCustom from "@/tools/SessionCustom";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {
      let login = {
        username: this.username,
        password: this.password,
      };
      AuthService.AuthLogin(login).then((res) => {
        // console.log(res.data.data);
        const data = res.data.data;
        SessionCustom.Save("token", data.token);
        Functions.ToPage("/");
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/login.scss";
</style>
