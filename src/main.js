// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {Button} from 'vant'
// Vue.use(Button);
// import { NavBar } from 'vant';

// Vue.use(NavBar);
import App from './App'
// import "swiper/dist/css/swiper.css";
import  Element from 'element-ui'
Vue.use(Element,{size:'small',zIndex:3000});
import {Select} from 'element-ui';
Vue.prototype.$ELEMENT = {size:'samll',zIndex:3000};


// Vue.component(Button.name,Button);
Vue.use(Select)
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
import { Lazyload } from 'vant';

Vue.use(Lazyload);

Vue.use(GridItem);
import { Icon } from 'vant';

Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false

import { NavBar } from 'vant';

Vue.use(NavBar);
import { Area } from 'vant';

Vue.use(Area);
import { Pagination } from 'vant';

Vue.use(Pagination);

import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);

// Vue.use(Toast)
import './assets/iconfont/iconfont.css'
import './style/new.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,
  components: { App },
  template: '<App/>'
  
})
