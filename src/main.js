// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {Button} from 'vant'
// Vue.use(Button);
// import { NavBar } from 'vant';

// Vue.use(NavBar);
import App from './App'
import router from './router'
import 'lib-flexible'
import { Button } from 'vant';

Vue.use(Button);
import { Search } from 'vant';

Vue.use(Search);
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
import { Icon } from 'vant';

Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
