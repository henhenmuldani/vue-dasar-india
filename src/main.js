import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// font awesome css
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// bootstrap css, js
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).mount("#app");
