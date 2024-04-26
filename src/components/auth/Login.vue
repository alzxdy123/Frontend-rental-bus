<template>
  <div>
    <div class="auth">
      <div class="containers">
        <Register v-if="!showLogin" @showSignUp="HanddleToggle()" />
        <form
          v-if="showLogin"
          @submit.prevent="handdleLogin()"
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
          class="needs-validation"
          novalidate
        >
          <div class="auth-form">
            <div class="auth-head">
              <h2>Login</h2>
            </div>
            <div class="auth-body">
              <div class="group-form">
                <label for="username" class="form-label">Username</label>
                <input
                  v-model="user.username"
                  id="username"
                  class="form-control"
                  name="username"
                  type="text"
                  :class="{ 'is-invalid': errors.username || ErrorMessage }"
                />
                <span>{{ errors.username || ErrorMessage }}</span>
              </div>
              <div class="group-form">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="user.password"
                  id="password"
                  class="form-control"
                  name="password"
                  type="password"
                  :class="{ 'is-invalid': errors.password || ErrorMessage }"
                />
                <span>
                  {{ errors.password || ErrorMessage }}
                </span>
              </div>
              <div class="group-form-chaptca">
                <div class="chaptca">
                  <div class="chaptca-wrapper">
                    <label>{{ chaptchaShow }} </label>
                    <i
                      aria-hidden="true"
                      class="jam jam-refresh"
                      @click="Rechaptcha()"
                    ></i>
                  </div>
                  <input type="text" id="chaptca" name="chaptca" />
                </div>
              </div>
            </div>
            <div class="auth-footer">
              <input type="submit" value="Login" class="button-auth" />
              <div @click="HanddleToggle()" class="register">
                Dont have account? <span>Register here</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Functions from "@/tools/Functions";
import Register from "./Signup.vue";
import AuthService from "@/services/Authentication/AuthService";
import SessionCustom from "@/tools/SessionCustom";

export default {
  components: {
    Register,
  },
  data() {
    return {
      chaptchaShow: "",
      showLogin: true,
      user: {
        username: "",
        password: "",
      },
      errors: {},
      ErrorMessage: "",
    };
  },

  methods: {
    handdleLogin() {
      const user = this.user;
      AuthService.AuthLogin(user)
        .then((response) => {
          // console.log("data", response.data);
          if (response.status == 200) {
            console.log(response);
            const data = response.data.data;

            this.$notify({
              title: "Login Up",
              text: response.data.message,
              type: "success",
              duration: 5000,
            });

            SessionCustom.Save("token", data.token);
            SessionCustom.Save("username", data.username);
            SessionCustom.Save("email", data.email);

            Functions.ToPage("/");
          }
        })
        .catch((error) => {
          const data = error.response.data;
          this.errors = Functions.ErrorMessage(data);
          this.ErrorMessage = data.message;
        });
    },

    Rechaptcha() {
      let chaptca = Functions.GenerateChaptcha(4);
      this.chaptchaShow = chaptca;
    },

    HanddleToggle() {
      this.showLogin = !this.showLogin;
    },
  },
  mounted() {
    let chaptca = Functions.GenerateChaptcha(4);
    this.chaptchaShow = chaptca;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/auth.scss";
</style>
