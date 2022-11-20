import '../css/style.css';
import 'vite/modulepreload-polyfill';

import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
          vueMessage: "Hello from Vue!"
        }
      }
})

app.mount("#app")