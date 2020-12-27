<template>
  <div>
    <h2>{{message}}</h2>
  <div class="a">
    <ul>
      <li>水水水水</li>
      <li>水水水水</li>
      <li>水水水水</li>
      <li>水水水水</li>
      <li>水水水水</li>
    </ul>
  </div>
  </div>

</template>
<script>
export default {
  name: "Hi",
  data() {
    return {
      message : 'Wo Shi Hi!'
    };
  }
};
</script>
<style >
.a{
  /* width: 700px; */
  height: 50px;
  background-color: red;
}
.qw{
  width: 200px;
  height: 1000px;
  background-color: salmon;
}
*{
  list-style: none;
  text-decoration: none;
}
ul{
  display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
}
</style>