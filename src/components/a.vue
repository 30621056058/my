<template>
  <div class="hello">
      <div id="a">
          <span v-bind:title="message">
              悬停
          </span>
      </div>
  </div>
</template>

<script>

// export default {
    
//   name: 'HelloWorld',
//   data () {
//     return {
//     //   msg: 'Welcome to Your Vue.js '
    
//     }
   
//   }
  
// }

export default {
    
  name: 'HelloWorld',
  data () {
   var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
}
input{
    width: 50px;
}
</style>
