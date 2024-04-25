<template>
  <div>
    <div class="btn btn-danger" @click="logout()">Log Out</div>
  </div>
</template>

<script>
import AuthService from "@/services/Authentication/AuthService";
import Functions from "@/tools/Functions";
import SessionCustom from "@/tools/SessionCustom";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      AuthService.AuthLogout().then((res) => {
        console.log(res);
        SessionCustom.Remove("token");
        Functions.ToPage("/login");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
