import { createApp } from "vue";
import App from "./App.vue";
// @是vite.config.js內建的定義：@指向src這個資料夾
import "@/css/main.sass";

createApp(App).mount("#app");
