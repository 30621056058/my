<template>
  <div>
    <div class="header-img">
      <img src="../assets/header.jpeg" alt="">
    </div>
   <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  input-align="center"
/>
<div class="carousel-img">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../assets/abs.jpeg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/abs.jpeg" alt=""></van-swipe-item>
   <van-swipe-item><img src="../assets/abs.jpeg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../assets/abs.jpeg" alt=""></van-swipe-item>
</van-swipe>
</div>
<div class="functional-zone">
  <!-- <van-grid :column-num="5">
  <van-grid-item v-for="value in 10" :key="value" icon="chat-o" text="文字" />
</van-grid> -->
<van-grid>
  <van-grid-item icon="chat-o" text="文字" />
  <van-grid-item icon="cart-o" text="文字" />
  <van-grid-item icon="friends-o" text="文字" />
  <van-grid-item icon="phone-o" text="文字" />
   <van-grid-item icon="gift-o" text="文字" />
  <van-grid-item icon="bag-o" text="文字" />
  <van-grid-item icon="coupon-o" text="文字" />
  <van-grid-item icon="bag-o" text="文字" />
</van-grid>
</div>
<div class="three-img">
  <div class="one">
    <img src="../assets/html.png" alt="">
  </div>
  <div class="two">
    <img src="../assets/html.png" alt="">
    <img src="../assets/html.png" alt="">
  </div>
</div>
<div class="everyday">
  <div class="content-day">每日精选</div>
  <div class="content-day-img"><img src="../assets/abs.jpeg" alt=""></div>
</div>
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
  <!-- </div> -->

</template>
<script>
export default {
  // name: "Hi",
  // data() {
  //   return {
  //     message : 'Wo Shi Hi!'
  //   };
  // },
  
    data() {
    return {
      value: '',
      active: 'home',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  
};
</script>
<style >
.content-day-img{
  height: 300px;
}
.content-day-img img{
  height: 100%;
  width: 100%;
}
.three-img{
  height: 300px;
  display: flex;
}
.two{
  width: 50%;
}
.two img{
  width: 100%;
  height: 50%;
}
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
.header-img img{
  width: 100%;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  van-swipe-item img{
    width: 100%;
  }
  .carousel-img{
    height: 300px;
  }
  .van-swipe{
    height: 100%;
  }
  .one{
    width: 50%;
  }
  .one img{
    width: 100%;
    height: 100%;
  }
</style>