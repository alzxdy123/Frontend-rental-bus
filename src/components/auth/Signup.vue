<template>
  <div>
    <form
      @submit.prevent="HanddleSignUp()"
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="auth-form">
        <div class="auth-head">
          <h2>Sign up</h2>
        </div>
        <div class="auth-body">
          <div class="group-form">
            <label for="username" class="form-label">Username</label>
            <input
              v-model="User.username"
              id="username"
              class="form-control"
              name="username"
              type="text"
              :class="{ 'is-invalid': errors.username }"
            />
            <span>{{ errors.username }}</span>
          </div>
          <div class="group-form">
            <label for="email" class="form-label">Email</label>
            <input
              v-model="User.email"
              id="email"
              class="form-control"
              name="email"
              type="text"
              :class="{ 'is-invalid': errors.email }"
            />
            <span>{{ errors.email }}</span>
          </div>
          <div class="group-form">
            <label for="password" class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              id="password"
              v-model="User.password"
              :class="{ 'is-invalid': errors.password }"
            />
            <span>{{ errors.password }}</span>
          </div>
        </div>
        <div class="auth-footer">
          <input type="submit" value="Sign up" class="button-auth" />
          <div @click="handdleToggle()" class="register">
            Already have account? <span>Back to login</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/Authentication/AuthService";
import Functions from "@/tools/Functions";

export default {
  data() {
    return {
      User: {
        username: "",
        email: "",
        password: "",
      },
      Message: "",
      errors: {},
    };
  },

  methods: {
    HanddleSignUp() {
      const user = this.User;

      AuthService.AuthSignUp(user)
        .then((response) => {
          console.log("res", response);
          const data = response.data;

          if (response.status == 200) {
            this.$notify({
              title: "Sign Up",
              text: data.message,
              type: "success",
              duration: 5000,
            });

            this.User = {
              username: "",
              email: "",
              password: "",
            };

            this.$emit("showSignUp", false);
          } else {
            this.$notify({
              title: "Sign Up",
              text: response.message,
              type: "error",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.errors = Functions.ErrorMessage(error.response.data);
        });
    },

    handdleToggle() {
      this.$emit("showSignUp", false);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/auth.scss";
</style>
