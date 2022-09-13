import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import TheHeader from './components/TheHeader.vue';


const app = createApp(App);


app.component('the-header', TheHeader);

app.use(store);

app.mount('#app');
