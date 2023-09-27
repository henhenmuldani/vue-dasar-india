<template>
  <pre>{{ this.user }}</pre>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Register here</p>
          </div>
          <div class="card-body bg-light">
            <p class="h3 display-3">Hello {{ this.message }}</p>
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input
                  v-model="user.name"
                  placeholder="Name"
                  class="form-control"
                  type="text"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.email"
                  placeholder="Email"
                  class="form-control"
                  type="email"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  placeholder="Password"
                  class="form-control"
                  type="password"
                />
              </div>
              <div class="mb-2">
                <button
                  class="btn btn-success m-1"
                  type="submit"
                  value="register"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      console.log(this.user);
    },
  },
};
</script>

<style lang="scss" scoped></style>
