<template>
  <aside class="loadingCon" :class="{active : isLoading}">
    <div class="contv">
      <img src="@/assets/gif.gif" alt="" class="img" :style="{transform: 'translateX( '+ imgTranslate +'%)'}"/>
      <div class="pannel">
        <div class="inset" :style="{width: imgCount + '%'}"></div>
      </div>
      <div class="percentNum">{{ imgCount }}%</div>
    </div>
  </aside>
</template>

<script>
import imath from 'common/js/math'
export default {
  name: 'g-loading',
  props: {},
  data () {
    return {
      imgCount: 0,
      imgTranslate: -40,
      imgArr: [
        require('@/assets/bg/p1.png'),
        require('@/assets/bg/p1_s.png'),
        require('@/assets/bg/p2.png'),
        require('@/assets/bg/p2_s.png'),
        require('@/assets/bg/p3.png'),
        require('@/assets/bg/p3_s.png'),
        require('@/assets/bg/p4.png'),
        require('@/assets/bg/p4_s.png'),
        require('@/assets/hobby/p1.png'),
        require('@/assets/hobby/p10.png'),
        require('@/assets/hobby/p11.png'),
        require('@/assets/hobby/p12.png'),
        require('@/assets/hobby/p13.png'),
        require('@/assets/hobby/p14.png'),
        require('@/assets/hobby/p2.png'),
        require('@/assets/hobby/p3.png'),
        require('@/assets/hobby/p4.png'),
        require('@/assets/hobby/p5.png'),
        require('@/assets/hobby/p6.png'),
        require('@/assets/hobby/p7.png'),
        require('@/assets/hobby/p8.png'),
        require('@/assets/hobby/p9.png'),
        require('@/assets/life/p1.png'),
        require('@/assets/life/p10.png'),
        require('@/assets/life/p11.png'),
        require('@/assets/life/p12.png'),
        require('@/assets/life/p13.png'),
        require('@/assets/life/p14.png'),
        require('@/assets/life/p15.png'),
        require('@/assets/life/p16.png'),
        require('@/assets/life/p17.png'),
        require('@/assets/life/p18.png'),
        require('@/assets/life/p19.png'),
        require('@/assets/life/p2.png'),
        require('@/assets/life/p20.png'),
        require('@/assets/life/p21.png'),
        require('@/assets/life/p22.png'),
        require('@/assets/life/p23.png'),
        require('@/assets/life/p24.png'),
        require('@/assets/life/p25.png'),
        require('@/assets/life/p26.png'),
        require('@/assets/life/p3.png'),
        require('@/assets/life/p4.png'),
        require('@/assets/life/p5.png'),
        require('@/assets/life/p6.png'),
        require('@/assets/life/p7.png'),
        require('@/assets/life/p8.png'),
        require('@/assets/life/p9.png'),
        require('@/assets/model/p1.png'),
        require('@/assets/model/p10.png'),
        require('@/assets/model/p10_s.png'),
        require('@/assets/model/p11.png'),
        require('@/assets/model/p11_s.png'),
        require('@/assets/model/p12.png'),
        require('@/assets/model/p12_s.png'),
        require('@/assets/model/p1_s.png'),
        require('@/assets/model/p2.png'),
        require('@/assets/model/p2_s.png'),
        require('@/assets/model/p3.png'),
        require('@/assets/model/p3_s.png'),
        require('@/assets/model/p4.png'),
        require('@/assets/model/p4_s.png'),
        require('@/assets/model/p5.png'),
        require('@/assets/model/p5_s.png'),
        require('@/assets/model/p6.png'),
        require('@/assets/model/p6_s.png'),
        require('@/assets/model/p7.png'),
        require('@/assets/model/p7_s.png'),
        require('@/assets/model/p8.png'),
        require('@/assets/model/p8_s.png'),
        require('@/assets/model/p9.png'),
        require('@/assets/model/p9_s.png'),
        require('@/assets/role/p1.png'),
        require('@/assets/role/p10.png'),
        require('@/assets/role/p10_s.png'),
        require('@/assets/role/p11.png'),
        require('@/assets/role/p11_s.png'),
        require('@/assets/role/p12.png'),
        require('@/assets/role/p12_s.png'),
        require('@/assets/role/p1_s.png'),
        require('@/assets/role/p2.png'),
        require('@/assets/role/p2_s.png'),
        require('@/assets/role/p3.png'),
        require('@/assets/role/p3_s.png'),
        require('@/assets/role/p4.png'),
        require('@/assets/role/p4_s.png'),
        require('@/assets/role/p5.png'),
        require('@/assets/role/p5_s.png'),
        require('@/assets/role/p6.png'),
        require('@/assets/role/p6_s.png'),
        require('@/assets/role/p7.png'),
        require('@/assets/role/p7_s.png'),
        require('@/assets/role/p8.png'),
        require('@/assets/role/p8_s.png'),
        require('@/assets/role/p9.png'),
        require('@/assets/role/p9_s.png'),
        require('@/assets/404.jpg'),
        require('@/assets/btnStart.png'),
        require('@/assets/gif.gif'),
        require('@/assets/no-net.png'),
        require('@/assets/index/bg.jpg'),
        require('@/assets/index/bottom_fence.png'),
        require('@/assets/index/bottom_mountain1.png'),
        require('@/assets/index/bottom_mountain2.png'),
        require('@/assets/index/btnClose.png'),
        require('@/assets/index/btnRule.png'),
        require('@/assets/index/btnStart.png'),
        require('@/assets/index/house.png'),
        require('@/assets/index/icon_slow.png'),
        require('@/assets/index/logo.png'),
        require('@/assets/index/ruleTitle.png'),
        require('@/assets/index/ruleTxt.png'),
        require('@/assets/index/shine.png'),
        require('@/assets/index/star1.png'),
        require('@/assets/index/star2.png'),
        require('@/assets/index/star3.png'),
        require('@/assets/index/star4.png'),
        require('@/assets/index/star5.png'),
        require('@/assets/index/star6.png'),
        require('@/assets/index/star_line.png'),
        require('@/assets/index/title.png'),
        require('@/assets/index/top_brand.png'),
        require('@/assets/index/top_curtain.png'),
        require('@/assets/index/tree.png'),
        require('@/assets/index/txt.png')
      ],
      isLoading: true
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.loading()
  },
  watch: {},
  methods: {
    loading () {
      let imgArr = this.imgArr
      let imgCount = this.imgCount
      for (let img of imgArr) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          imgCount++
          // this.imgCount = parseInt(imgCount / imgArr.length) * 100
          if (imgCount === imgArr.length) {
            // 模拟loading
            this.load_timer()
          }
        }
      }
    },
    // 模拟加载进度
    load_timer (per) {
      per = per || 0
      per += imath.randomRange(1, 3)
      per = per > 100 ? 100 : per
      this.imgCount = per
      this.imgTranslate = (per - 40)
      if (per === 100) setTimeout(this.pageInit, 500)
      else setTimeout(this.load_timer, 33, per)
    }, // edn func
    pageInit () {
      this.isLoading = false
      this.$emit('onComplete', true)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.loadingCon {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #3c2e6c;
  opacity: 0;
  pointer-events: none;
  transition: all 300ms;
  z-index: 10;
  &.active{
    opacity: 1;
    pointer-events: all;
  }
  .contv {
    position: absolute;
    width: 100%;
    height: auto;
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    .pannel{
      width: 2.8rem;
      height: 0.08rem;
      border-radius: 0.1rem;
      margin: -0.1rem auto 0.3rem;
      overflow: hidden;
      .inset{
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 0.1rem;
        transition: all 0.3s;
      }
    }
    .img {
      width: 3rem;
      transform: translateX(-40%);
    }
    .percentNum {
      font-size: 0.3rem;
      color: #fff;
    }
  }
}
</style>
