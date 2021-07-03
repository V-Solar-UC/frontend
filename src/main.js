// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';

// library.add();
const app = createApp(App).use(router);

app.component('FontAwesomeIcon', FontAwesomeIcon);

router.isReady().then(() => {
  app.mount('#app');
});
