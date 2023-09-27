<script setup>
import AuthUser from "./components/AuthUser.vue";
import Counter from "./components/Counter.vue";
import Customer from "./components/Customer.vue";
import Employee from "./components/Employee.vue";
import Greeting from "./components/Greeting.vue";
import Navbar from "./components/Navbar.vue";
import Register from "./components/Register.vue";
import UserList from "./components/UserList.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <router-view />

    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            officiis non nisi sint totam sequi aliquam ea fuga dignissimos
            voluptatum dolores, debitis quod sit repudiandae obcaecati modi
            placeat? Quis.
          </p>
        </div>
      </div>
    </div>

    <Customer name="Henhen" age="27" />
    <Employee />
    <Counter />
    <Greeting />
    <Register />
    <AuthUser />
    <UserList />
  </div>
</template>

<!-- <style scoped></style> -->
