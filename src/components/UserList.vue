<script setup>
import Spinner from "./Spinner.vue";
</script>

<template>
  <div class="container">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-if="errorMessage">
      <p class="fw-bold text-danger">{{ errorMessage }}</p>
    </div>
    <pre>{{ errorMessage }}</pre>
    <div class="row" v-if="!loading && users.length > 0">
      <div class="col">
        <table class="table table-hover text-center table-stripped">
          <thead class="bg-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<table class="table">


  </table>

<script>
import { UserService } from "../services/UserService.js";
import { UserApiService } from "../services/UserApiService.js";
export default {
  name: "UserList",
  data() {
    return {
      loading: false,
      users: [],
      errorMessage: null,
      //users: UserService.getAllUsers(),
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UserApiService.getAllUsers();
      this.loading = false;
      this.users = response.data;
      //console.log(response);
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
      //console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
