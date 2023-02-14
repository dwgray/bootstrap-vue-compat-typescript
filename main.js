import { createApp } from '@vue/compat';
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import HelloBootstrap from './components/HelloBootstrap.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(HelloBootstrap);
app.use(BootstrapVue);
app.use(BootstrapVueIcons);
app.mount('#app');
