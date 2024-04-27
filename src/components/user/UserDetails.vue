<template>
  <div>
    <div class="container">
      user
      {{ user.username }}
      {{ user.email }}
      {{ user.password }}
    </div>
  </div>
</template>

<script>
import SessionCustom from "@/tools/SessionCustom.js";
export default {
  data() {
    return {
      user: [],
    };
  },

  methods: {},

  mounted() {
    const user = SessionCustom.Read("userData");
    this.user = user;
  },
};
</script>

<style lang="scss"></style>
