
<template>
  <!-- <div class="two-box"> -->
      <div class="t-box">
     <!-- <div class="gress">
         <div ><a  href=""><router-link to="a" >返回</router-link>  </a> </div>
         <div >美食</div>
         <div>搜索</div>
     </div> -->
<!-- <div class="choose">
    <ul>S
        <li>
            <a href="#">美食
                <i class="iconfont iconxiala"></i>
            </a>
        </li>
         <li>
            <a href="#">城市
                <i class="iconfont iconxiala"></i>
            </a>
        </li>
         <li>
            <a href="#">排序
                <i class="iconfont iconxiala"></i>
            </a>
        </li>
         <li>
            <a href="#">筛选
                <i class="iconfont iconxiala"></i>
            </a>
        </li>
    </ul>
</div> -->
<div ><a  href=""><router-link to="a" >返回</router-link>  </a> </div>
<van-dropdown-menu>
  <van-dropdown-item  title="城市" v-model="value1" :options="option1" />
  <van-dropdown-item   title="美食"  v-model="value2" :options="option2" />
  <van-dropdown-item   title="价格"  v-model="value3" :options="option3" />
  
</van-dropdown-menu>
<div class="shopping">
    <div class="shopping-content">
        <h5>麦当劳（佛山店）
            <i class="iconfont iconwodetuangou"></i>
        </h5>
        <div class="shopping-star"> 
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <strong>5.0</strong>
            <span>顺德</span>
        </div>
    </div>
    <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/shiwu2.jpeg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
     <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/shiwu.jpeg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
</div>
<div class="shopping">
    <div class="shopping-content">
        <h5>九毛九（佛山店）
            <i class="iconfont iconwodetuangou"></i>
        </h5>
        <div class="shopping-star">
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <strong>5.0</strong>
            <span>顺德</span>
        </div>
    </div>
    <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
     <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
</div>
<div class="shopping">
    <div class="shopping-content">
        <h5>（佛山店）
            <i class="iconfont iconwodetuangou"></i>
        </h5>
        <div class="shopping-star">
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <strong>5.0</strong>
            <span>顺德</span>
        </div>
    </div>
    <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/a.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
     <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
</div>
<div class="shopping">
    <div class="shopping-content">
        <h5>肯德基（佛山店）
            <i class="iconfont iconwodetuangou"></i>
        </h5>
        <div class="shopping-star">
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <strong>5.0</strong>
            <span>顺德</span>
        </div>
    </div>
    <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
     <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
</div>
<div class="shopping">
    <div class="shopping-content">
        <h5>华莱士（佛山店）
            <i class="iconfont iconwodetuangou"></i>
        </h5>
        <div class="shopping-star">
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <i class="iconfont iconxingxing"></i>
            <strong>5.0</strong>
            <span>顺德</span>
        </div>
    </div>
    <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
     <div class="shopping-c">
        <div class="shopping-c-left"><img src="../assets/gc.jpg" alt=""></div>
        <div class="shopping-c-right">
            <h6>套餐2选1，提供免费WiFi</h6>
            <p><strong>9.5元</strong>门市价：20元 <small>已售666</small></p>
        </div>
    </div>
</div>
<van-pagination
  v-model="currentPage"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
<!-- <van-area title="标题" :area-list="areaList" value="110101" /> -->
  <!-- </div> -->
  <div class="dingwei">
      <div id="dw" >
          <i class="iconfont iconxiangshang1"></i>
      </div>
  </div>
  <div id="adc"></div>
  <!-- <i></i>
  js操作之后
  <a href=""><i></i></a> -->
  </div>
  
</template>

<script>
// import  AreaList from "../assets/area"
// import a from "../assets/js/a.js"
// import { Toast } from 'vant';
// import tiao from "../assets/js/a"
 
export default {
    mounted() {
  const s = document.createElement('script');
  s.type ='text/javascript';
  s.src ='src\assets\js\a.js';
  
  document.body.appendChild(s);
 },
    data (){
        return{
            name: "",
             currentPage: 1,
            // arrylist:AreaList
             value1: 0,
      value2: 'a',
       value3: '0',
      option1: [
        { text: '顺德', value: 0 },
        { text: '广州', value: 1 },
        { text: '深圳', value: 2 },
      ],
      option2: [
        { text: '奶茶', value: 'a' },
        { text: '肠粉', value: 'b' },
        { text: '炸鸡', value: 'c' },
      ],
      option3: [
        { text: '1-20元', value: '0' },
        { text: '20-40元', value: '1' },
        { text: '40-100元', value: '2' },
      ],
        };
        
    },
    methods:{
        onConfirm() {
      this.$refs.item.toggle();
    },

       
    },
    pp(){
        this.$router.go
    }
}

</script>

<style>

</style>