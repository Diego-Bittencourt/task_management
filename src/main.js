import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router.js';
import TheHeader from './components/TheHeader.vue';


const app = createApp(App);


app.component('the-header', TheHeader);

app.use(store);
app.use(router);

app.mount('#app');
