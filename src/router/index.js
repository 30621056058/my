import Vue from 'vue'
// 引入vue
import Router from 'vue-router'
//引入路由
import HelloWorld from '@/components/HelloWorld'
//引入HelloWorld.vue页面（菜鸟的直接理解）
import v from '@/components/v'
//引入v.vue页面
import b from '@/components/b'
//引入b.vue页面
import a from '@/components/a'

Vue.use(Router)
// 使用路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 个人理解：一个路由的格式
    {
      path: '/v',
      // 路径
      name: 'v',
      // 名字
      component: v
      // 通过对应的模板
    },
    {
      path: '/b',
      name: 'b',
      component: b
    },
    {
      path: '/a',
      name: 'a',
      component: a
    }
  ]
})

// var express = require('express')
// var app = express();

// app.get('/',function(req,res){
//   res.send('hello world!');
// });

// var server = app.listen(3000,function(){
//   var host = server.address().address;
//   var port = server.address().port;

// });
