<template>
  <div>
    <div class="container">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Total Perusahaan</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>
                <div class="btn btn-success" @click="HandleDetail(user.id)">
                  Detail
                </div>
                <div class="btn btn-warning">Edit</div>
                <div class="btn btn-danger" @click="HandleDelete(user.id)">
                  Delete
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Functions from "@/tools/Functions";
import UserService from "../../services/UserService";
import SessionCustom from "@/tools/SessionCustom";
export default {
  data() {
    return {
      users: [],
    };
  },

  methods: {
    HanddleApi() {
      UserService.GetAllUser().then((responese) => {
        const data = responese.data.data;

        this.users = data;
      });
    },

    HandleDelete(id) {
      UserService.DeleteUser(id).then((response) => {
        this.$notify({
          title: "Delete Account",
          text: response.data.message,
          type: "success",
          duration: 5000,
        });
        location.reload();
      });
    },

    HandleDetail(id) {
      UserService.GetUserByID(id).then((responese) => {
        const data = responese.data.data;

        SessionCustom.Save("userData", data);

        Functions.ToPage("/users/details");
      });
    },
  },

  mounted() {
    this.HanddleApi();
  },
};
</script>

<style lang="scss"></style>
