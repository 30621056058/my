<template>
  <div class="big-box">
      <div class="header-big">
      <div class="content">
          <div class="header">
              <div class="header-both">
              <van-icon name="arrow-left" />
              <router-link to="a"><p>玩乐</p></router-link>
              </div>
              <van-search v-model="value" placeholder="请输入搜索关键词" />
          </div>
      </div>
      </div>
      <!-- choose-play -->
      <div class="choose-play">

          <div class="choose-content-play">
              <p>全城精选</p>
              <p>宝藏玩乐</p>
          </div>
            <div class="choose-play-list">
                <div class="choose-play-list-l"><a href="#">首单立减</a> </div>
                <div class="choose-play-list-l"><a href="#">首单立减</a> </div>
                <div class="choose-play-list-l"><a href="#">首单立减</a> </div>
                <div class="choose-play-list-l"><a href="#">首单立减</a> </div>
            </div>
      </div>
      <!-- choose-play -->
      <div class="play-content-matter">
          <div class="play-content-matter-inside">
              <div class="play-content-matter-inside-top">
                  <div class="play-content-matter-inside-top-left">
                      <p>ktv</p>
                      <p>*****</p>
                      <p class="play-content-matter-inside-top-left-p"><span>休闲娱乐/顺德</span><span>13.0km</span> </p>
                      <p class="play-red">会员价9.5折</p>
                  </div>
                  <div class="play-content-matter-inside-top-right">
                      <img src="../assets/jp.jpg" alt="">
                  </div>
              </div>
               <div class="play-content-matter-inside-center">
                   <van-icon name="star-o" /><span>米米米米米米米米米米</span> 
               </div>
                <div class="play-content-matter-inside-bottom">
                    <p>查看更多优惠项目<van-icon name="arrow" /></p>
                </div>
          </div>
      </div>
      <div class="play-content-matter">
          <div class="play-content-matter-inside">
              <div class="play-content-matter-inside-top">
                  <div class="play-content-matter-inside-top-left">
                      <p>ktv</p>
                      <p>*****</p>
                      <p class="play-content-matter-inside-top-left-p"><span>休闲娱乐/顺德</span><span>13.0km</span> </p>
                      <p class="play-red">会员价9.5折</p>
                  </div>
                  <div class="play-content-matter-inside-top-right">
                      <img src="../assets/jp.jpg" alt="">
                  </div>
              </div>
               <div class="play-content-matter-inside-center">
                   <van-icon name="star-o" /><span>米米米米米米米米米米</span> 
               </div>
                <div class="play-content-matter-inside-bottom">
                    <p>查看更多优惠项目<van-icon name="arrow" /></p>
                </div>
          </div>
      </div>
      <div class="play-list">
          <div class="play-list-inside">
          <div class="play-list-header">
              <span>顺德玩乐榜</span><span class="play-list-header-b">更多榜单<van-icon name="arrow" /></span>
          </div>
          <div class="play-list-bottom">
              <div class="play-list-bottom-one">
              <img src="../assets/xd.jpeg" alt="">
              <div class="play-list-bottom-header">汇美健身</div>
              <div class="start">
              <van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" />
              </div>
              <p class="play-list-bottom-bottom"><span>大良</span><span>17.2km</span></p>
              </div>
              <div class="play-list-bottom-one">
              <img src="../assets/xd.jpeg" alt="">
              <div class="play-list-bottom-header">汇美健身</div>
              <div class="start">
              <van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" />
              </div>
              <p class="play-list-bottom-bottom"><span>大良</span><span>17.2km</span></p>
              </div>
              <div class="play-list-bottom-one">
              <img src="../assets/xd.jpeg" alt="">
              <div class="play-list-bottom-header">汇美健身</div>
              <div class="start">
              <van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" /><van-icon name="star" />
              </div>
              <p class="play-list-bottom-bottom"><span>大良</span><span>17.2km</span></p>
              </div>
          </div>
          </div>
      </div>
      <div @click="c">aaa</div>
  </div>
  
</template>

<script>
import play  from '../assets/js/play'
export default {
data() {
    return {
      value: '',
    };
  },
  methods: {
      play(){
          play.play()
      }
  },
}
</script>

<style>
@import  '../style/play.css';


</style>