import { createApp } from 'vue';
import App from './App.vue';

//import store and router
import store from './store/index.js';
import router from './router.js';

//import components
import TheHeader from './components/layout/TheHeader.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);


app.component('the-header', TheHeader);
app.component('base-card', BaseCard);

app.use(store);
app.use(router);

app.mount('#app');
