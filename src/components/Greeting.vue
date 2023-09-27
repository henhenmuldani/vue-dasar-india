<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">Hello {{ this.message }}</p>
            <button class="btn btn-success m-1" @click="greet(`Good Morning`)">
              Good Morning
            </button>
            <button
              class="btn btn-warning m-1"
              @click="greet(`Good Afternoon`)"
            >
              Good Afternoon
            </button>
            <button class="btn btn-danger m-1" @click="greet(`Good Evening`)">
              Good Evening
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    greet(value) {
      this.message = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
