<template>
  <pre>{{ this.isLogin }}</pre>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div v-if="isLogin">
              <p class="h3 text-success">User Login</p>
            </div>
            <div v-if="!isLogin">
              <p class="h3 text-danger">User Logout</p>
            </div>
            <div>
              <button
                v-if="!isLogin"
                @click="login()"
                class="btn btn-success btn-sm m-1"
              >
                Login
              </button>
              <button
                v-if="isLogin"
                @click="logout()"
                class="btn btn-danger btn-sm m-1"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthUser",

  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
