<template>
  <div class="home">
    <div class="header">
      <div class="navbar">
        <div class="navbar-group" id="head">
          <div class="navbar-list">Logo</div>
          <div class="navbar-list-judul">E - BENGKEL</div>
        </div>
        <div class="navbar-group" id="body">
          <div class="navbar-list">
            <i class="jam jam-language"></i> Language
          </div>
          <div class="navbar-list"><i class="jam jam-grid"></i> Dashbaord</div>
          <div class="navbar-list" @click="logout()">
            <i class="jam jam-log-out"></i> Logout
          </div>
          <div class="navbar-list"><i class="jam jam-user"></i> Username</div>
        </div>
        <div class="navbar-group" id="logoNav">
          <div class="navbar-list">
            <i class="jam jam-language"></i>
          </div>
          <div class="navbar-list"><i class="jam jam-grid"></i></div>
          <div class="navbar-list" @click="logout()">
            <i class="jam jam-log-out"></i>
          </div>
          <div class="navbar-list"><i class="jam jam-user"></i></div>
        </div>
      </div>
      <div class="header-link">
        <div class="link-list">
          <i class="jam jam-user"></i>Barang yg tersedia
        </div>
        <div class="link-list">
          <i class="jam jam-user"> </i>User yg terdaftar
        </div>
        <div class="link-list">
          <i class="jam jam-user"></i>Daftar Penjualan & Pembelian
        </div>
        <div class="link-list"><i class="jam jam-user"></i>Database</div>
      </div>
      <div class="header-link-respons">
        <i class="jam jam-user"></i>
        <i class="jam jam-user"></i>
        <i class="jam jam-user"></i>
        <i class="jam jam-user"></i>
      </div>
    </div>
    <div class="body"></div>
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
        SessionCustom.Remove("token");
        SessionCustom.Remove("username");
        SessionCustom.Remove("email");
        Functions.ToPage("/login");
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/home.scss";
</style>
