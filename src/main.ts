import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersistedState);

app.use(pinia);
app.mount("#app");
