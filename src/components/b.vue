<template>
  <div class="box">
    <div class="header">
     <van-nav-bar title="标题" left-text="返回"  left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
    
  </template>
</van-nav-bar>

      <!-- <router-link to="a" >返回</router-link> -->
    </div>
    <div class="white1">
      <div class="white1-content">
        <van-swipe
          id="one"
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
        </van-swipe>

        <van-grid>
          <van-grid-item icon="video-o" text="电影" />
          <van-grid-item icon="fire-o" text="赛事" />
          <van-grid-item icon="gold-coin-o" text="优惠" />
          <van-grid-item icon="diamond-o" text="月卡" />
        </van-grid>

        <div class="Hot">
          <div class="hot-one">
            <p>实时票房</p>
            <p class="miaosha">
              秒杀票房<i><van-icon name="award-o" /></i>
            </p>
          </div>
          <div class="hot-one">
            <p>实时票房</p>
            <p class="miaosha">
              秒杀票房<i><van-icon name="award-o" /></i>
            </p>
          </div>
          <div class="hot-one">
            <p>实时票房</p>
            <p class="miaosha">
              秒杀票房<i><van-icon name="award-o" /></i>
            </p>
          </div>
          <div class="hot-one">
            <p>实时票房</p>
            <p class="miaosha">
              秒杀票房<i><van-icon name="award-o" /></i>
            </p>
          </div>
        </div>
        <van-swipe
          id="two"
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img src="../assets/shui.jpg" alt=""
          /></van-swipe-item>
        </van-swipe>
        <div class="is-hit-big">
          <div class="Is-hit">
            <div class="is-hit-header">
              <span>即将上映</span>
              <span>全部39部</span>
            </div>
          </div>

          <div class="is-hit-content">
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
          </div>
        </div>
        <!-- is-hit-big -->
        <div class="is-hit-big">
          <div class="Is-hit">
            <div class="is-hit-header">
              <span>正在上映</span>
              <span>全部39部</span>
            </div>
          </div>

          <div class="is-hit-content">
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
              <div class="subscribe"><a href="">预约</a> </div>
            </div>
          </div>
         </div>
          <div class="is-hit-big">
          <div class="Is-hit">
            <div class="is-hit-header">
              <span>猫眼放映厅</span>
              <span>全部39部</span>
            </div>
          </div>

          <div class="is-hit-content">
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
               <span>2.2万次播放</span>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
               <span>2.2万次播放</span>
            </div>
            <div class="is-hit-content-img">
              <img src="../assets/is-hit-t.jpeg" alt="" />
              <p>唐人街探案3</p>
               <span>2.2万次播放</span>
            </div>
          </div>
         </div>
         <div class="brilliant">
         <div class="is-hit-header">
              <span>正在上映</span>
              <span>全部39部</span>
            </div>
            <div class="l-r">
            <div class="brilliant-left">
              <img src="../assets/xd.jpeg" alt="">
              <p>唐人街探案3</p>
              <p>唐人街探案3唐人街探案3</p>
              <div class="l-r-icon">
                <span><van-icon name="video-o" />电影</span>
                <span><van-icon name="video-o" />电影</span>
              </div>
            </div>
            <div class="brilliant-right">
              <div class="brilliant-right-img">
                <img src="../assets/qw.jpeg" alt="">
              </div>
              <div class="brilliant-right-content">
                <strong>温暖的宝宝</strong>
                <p><span>猫眼评分5.5</span><span>33.0万人想看</span></p>
                <p>￥27.9起</p>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
    <div @click="a">aaa</div>
    <!-- <div @click="b">aaa</div> -->
  </div>

  <!-- </div> -->
</template>

<script>
// import Swiper from 'swiper';
import a from '../assets/js/a'
// import b from '../assets/js/b'
export default {
  data() {
    return {};
  },
  methods: {
    a(){
      a.a()
    }
    // b(){
    //   b.b()
    // }
  },
};
</script>

<style>
.l-r-icon{
  display: flex;
  justify-content: space-between;
}
.brilliant-right-content{
  text-align: left;
}
.brilliant-right{
  width: 48%;
  text-align: right;
}
.brilliant-right img{
  width: 100%;
}
.l-r{
  display: flex;
  justify-content: space-between;
}
.brilliant-left p{
  text-align: left;
}
.brilliant-left img{
  width: 100%;
}
.brilliant-left{
  width: 48%;
  text-align: left;
}
.is-hit-big {
  margin-bottom: 60px;
}
.subscribe {
  border-radius: 38%;
  background: red;
  width: 60px;
  margin: auto;
  color: white;
  height: 34px;
  display: grid;
  align-content: center;
}
.is-hit-content-img {
  width: 30%;
}
.is-hit-content-img img {
  width: 100%;
}
.is-hit-content {
  display: flex;
  justify-content: space-between;
}
.swiper-container {
  height: 200px;
  width: 100%;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 999;
}
.is-hit-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
#one {
  height: 160px;
}
#two {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 160px;
}
.my-swipe .van-swipe-tem {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  background-color: #39a9ed;
  height: 200px;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  margin-bottom: 10px;
  position: fixed;
  width: 100%;
}
.van-nav-bar {
  background: red;
}
.white1 {
  background: white;
  border-radius: 40px 40px 0px 0px;
  /* margin-top: 85px; */
  padding-top: 80px;
}
.white1-content {
  width: 90%;
  margin: auto;
  /* margin-top: px; */
  /* position: relative; */
  /* top: 30px; */
  padding-top: 30px;
}
.van-icon-video-o::before {
  color: red;
}
.van-icon-fire-o::before {
  color: aqua;
}
.van-icon-diamond-o::before {
  color: rgba(0, 0, 255, 0.712);
}
.van-icon-gold-coin-o::before {
  color: lightcoral;
}
.Hot {
  display: flex;
  justify-content: space-between;
}
.hot-one {
  width: 22%;
  /* height: 80px; */
  background: #eee;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  text-align: left;
  border: 1px solid wheat;
}
.miaosha {
  font-size: 12px;
}
</style>