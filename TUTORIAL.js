//! Instalation
//! rekomen pake npm create vue @latest biar langsung ada vue router dan vuex
/* 
1.  npm create vite@latest //https://vitejs.dev/guide/ atau https://vuejs.org/guide/introduction.html
2.  √ Project name: ... vue-dasar-india
    √ Select a framework: » Vue
    √ Select a variant: » JavaScript
3.  cd vue-dasar-india
    npm install
    npm run dev 
*/

//! Push ke github
/* 
git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/henhenmuldani/vue-dasar-india.git
git push -u origin master
*/

//! Struktur folder dan file
/* 
1. pada file .vue ada 3 bagian
    - template (html)
    - script (js)
    - style (css)
*/

//! Install package yang dibutuhkan
/* 
1. Vue Router
    - npm install vue-router@4

2. Bootstrap
    - npm i bootstrap

3. Fortawesome
    - npm i @fortawesome/fontawesome-free

4. Axios
    - npm i axios

*/

//! Apply CSS
/* 
1. Buka App.vue
2. sisakan tagnya saja
3. contoh penerapan css pada file .vue
<template>
  <h2>App Component</h2>
</template>

<style scoped>
h2 {
  color: red;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
4. bisa juga dipisah di file css
5. tinggal import './style.css'
*/

//! Apply Bootstrap dan Fortawesome
/* 
1. Buka main.js
2. import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
3. import "../node_modules/bootstrap/dist/css/bootstrap.css";
4. import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
*/

//! Add google font
/* 
1. buka google font
2. pilih font yang diinginkan
3. copy link @import 
4. paste di style.css
*/

//! Props
/* 
1. Props adalah data yang dikirim dari parent ke child atau sebaliknya
2. diparentnya ditulis
    <Customer name="Henhen" age="27" />
3. di childnya ditulis
        <ul class="list-group">
          <li class="list-group-item">Name : {{ name }}</li>
          <li class="list-group-item">Age : {{ age }}</li>
        </ul>
<script>
export default {
  name: "Customer",
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
*/

//! State
/* 
1. state adalah data yang disimpan di component itu sendiri
2. state menggunakan data property
3. data property harus berupa function
4. contoh
        <ul class="list-group">
          <li class="list-group-item">Name : {{ this.employee.name }}</li>
          <li class="list-group-item">Age : {{ this.employee.age }}</li>
        </ul>
<script>
export default {
  name: "Employee",
  data: function () {
    return {
      employee: {
        name: "Henhen",
        age: 27,
      },
    };
  },
};
</script>
*/

//! Event Handling
/* 
1. event handling adalah cara untuk menghandle event yang terjadi di component
2. event handling menggunakan method
3. method harus berupa function
4. event bisa pakai parameter atau tidak
5. contoh
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
*/

//! Form Handling
/* 
1. form handling adalah cara untuk menghandle form yang ada di component
2. form handling menggunakan v-model
3. v-model isinya adalah data property
4. contoh
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
*/

//! Conditional Rendering
/* 
1. Conditional Rendering adalah cara untuk menghandle kondisi yang ada di component
2. Conditional Rendering menggunakan v-if
3. v-if isinya adalah kondisi
4. contoh
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
*/

//! List Rendering (v-for)
/* 
1. List Rendering adalah cara untuk menghandle list yang ada di component
2. List Rendering menggunakan v-for
3. ambil data dari sini https://jsonplaceholder.typicode.com/
4. contoh
         <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
            </tr>
          </tbody>
<script>
data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
        },
    ];
    },
}
</script>
*/

//! Fetch API with Axios
/* 
1. Fetch API with Axios adalah cara untuk mengambil data dari API
2. https://jsonplaceholder.typicode.com/users
3. buat file service
4. isinya
import axios from "axios";
export class UserApiService {
  static getAllUsers() {
    let dataUrl = "https://jsonplaceholder.typicode.com/users";
    return axios.get(dataUrl);
  }
}
5. panggil di component
export default {
  name: "UserList",
  data() {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UserApiService.getAllUsers();
      this.loading = false;
      this.users = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>
6. tampilkan di component
<div class="row" v-if="!loading && users.length > 0">
*/

//! Routing (Vue Router)
/* 
1. ini penting
If you are using Vite, use import.meta.env instead, process.env is removed.
And make sure variables start with VITE_ in .env file.
VITE_SOME_KEY=123
more https://vitejs.dev/guide/env-and-mode.html
2. pastikan di main.js sudah import router from "./router"; dan createApp(App).use(router).mount("#app");
3. di App.vue tinggal panggil <router-view />
4. tinggal tambahkan route di router/index.js
5. di component yang mau di route tinggal tambahkan <router-link to="/users">Users</router-link>
*/
