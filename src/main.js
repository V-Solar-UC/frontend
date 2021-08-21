// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';

library.add(faGithub, faTwitter, faEnvelope, faInstagram, faLinkedin);
const app = createApp(App).use(router);

app.component('FontAwesomeIcon', FontAwesomeIcon);

router.isReady().then(() => {
  app.mount('#app');
});
