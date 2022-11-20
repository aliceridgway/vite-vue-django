import '../css/style.css';
import 'vite/modulepreload-polyfill';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

app.mount("#app")