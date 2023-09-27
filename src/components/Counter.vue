<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ this.count }}</p>
            <button @click="increment" class="btn btn-success m-1">
              Increment
            </button>
            <button @click="decrement" class="btn btn-danger m-1">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    //penulisan fungsi bisa langsung seperti ini tanpa function dan return
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style lang="scss" scoped></style>
