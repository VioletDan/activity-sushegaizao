<template>
  <main id="atricle">
    <section class="page preFace" id="preFace">
      <img src="@/assets/index.png" alt="" class="bg" />
      <img
        src="@/assets/btnStart.png"
        alt=""
        class="btnStart"
        @click="btnStartClick"
      />
    </section>
    <section class="page home" id="home" v-show="isHome">
      <div class="touchBox">
        <img :src="selectImgObj.bg" alt="" class="tbg" />
        <div class="roleBox">
          <img :src="selectImgObj.model" alt=""/>
          <img :src="selectImgObj.role" alt=""/>
        </div>
      </div>
      <g-pannel @onItemClick="onItemClick"></g-pannel>
      <!-- <div class="userInfo">
        <div>{{ userInfo.Name }}</div>
        <img :src="userInfo.avatar" alt="" />
      </div>
      <div class="touchArea" id="touchArea">
        <div class="box box1"></div>
      </div> -->
    </section>
    <g-loading @onComplete="onComplete"></g-loading>
  </main>
</template>

<script>
import Touchjs from 'touchjs'
import Mock from 'mockjs'
import { mapState, mapMutations } from 'vuex'
import imath from 'common/js/math'
export default {
  name: 'atricle',

  components: {},

  data () {
    return {
      isHome: false,
      dx: 0,
      dy: 0,
      rotate: 0,
      touchArea: '',
      currentScale: '',
      initialScale: 1,
      selectImgObj: {
        bg: require('@/assets/bg/p1.png'),
        role: '',
        model: '',
        life: [],
        hobby: []
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {},
  mounted () {
    // this.touchArea = document.getElementById('touchArea')
    // this.touchArea.style.webkitTransition = 'all ease 0.05s'
    // this.touchAreaBox1 = this.touchArea.childNodes[0]
    // this.touchAreaBox2 = this.touchArea.childNodes[1]
    // this.init()
  },
  methods: {
    init () {
      Touchjs.on(this.touchArea, 'touchstart', function (ev) {
        ev.preventDefault()
      })
      Touchjs.on(this.touchArea, 'drag', ev => {
        this.dx = this.dx || 0
        this.dy = this.dy || 0
        // console.log('当前x值为:' + this.dx + ', 当前y值为:' + this.dy + '.')
        var offx = this.dx + ev.x + 'px'
        var offy = this.dy + ev.y + 'px'
        this.touchArea.style.webkitTransform =
          'translate3d(' + offx + ',' + offy + ',0)'
      })
      Touchjs.on(this.touchArea, 'dragend', ev => {
        this.dx += ev.x
        this.dy += ev.y
      })
      // 缩放
      Touchjs.on(this.touchArea, 'pinch', ev => {
        this.currentScale = ev.scale - 1
        // console.log(this.initialScale, this.currentScale)
        this.currentScale = this.initialScale + this.currentScale
        this.currentScale = this.currentScale > 2.5 ? 2.5 : this.currentScale
        this.currentScale = this.currentScale < 0.1 ? 0.1 : this.currentScale
        // this.touchAreaBox1.style.webkitTransform = 'scale(' + this.currentScale + ')'
        // console.log('当前缩放比例为:' + this.currentScale + '.')
      })
      Touchjs.on(this.touchArea, 'pinchend', ev => {
        this.initialScale = this.currentScale
      })
      // 旋转
      Touchjs.on(this.touchArea, 'rotate', ev => {
        var totalAngle = this.rotate + ev.rotation
        if (ev.fingerStatus === 'end') {
          this.rotate = this.rotate + ev.rotation
        }
        this.touchAreaBox1.style.webkitTransform =
          'scale(' + this.currentScale + ') rotate(' + totalAngle + 'deg)'
      })

      var userInfo = Mock.mock({
        Name: Mock.Random.first(),
        avatar: Mock.Random.dataImage('132x132', 'avatar'),
        age: Mock.Random.natural(20, 40)
      })
      this.STOREchangeUserInfo(userInfo)
    },
    onComplete (val) {
      if (val) {
      }
    },
    btnStartClick () {
      this.isHome = true
    },
    onItemClick (val) {
      var num = imath.randomRange(1, 12)
      switch (val.typeIndex) {
        case 0:
          this.selectImgObj.bg = require(`@/assets/bg/p${(val.currentSmallItemIndex + 1)}.png`)
          break
        case 1:
          this.selectImgObj.role = require(`@/assets/role/p${(val.currentSmallItemIndex + 1)}.png`)
          if (!this.selectImgObj.model) this.selectImgObj.model = require(`@/assets/model/p${num}.png`)
          break
        case 2:
          this.selectImgObj.model = require(`@/assets/model/p${(val.currentSmallItemIndex + 1)}.png`)
          if (!this.selectImgObj.role) this.selectImgObj.role = require(`@/assets/role/p${num}.png`)
          break
        case 3:
          this.selectImgObj.life.push(require(`@/assets/life/p${(val.currentSmallItemIndex + 1)}.png`))
          break
        case 4:
          this.selectImgObj.hobby.push(require(`@/assets/hobby/p${(val.currentSmallItemIndex + 1)}.png`))
          break
      }
      console.log(this.selectImgObj)
    },
    ...mapMutations(['STOREchangeUserInfo'])
  }
}
</script>

<style scoped lang="scss">
#atricle {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  transform-origin: 0 0;
  section.page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: display 300ms;
    background-color: #fff;
  }
  #preFace {
    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .btnStart {
      width: 3.04rem;
      height: 0.95rem;
      position: absolute;
      bottom: 1.4rem;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  #home {
    .touchBox {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      > .tbg {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      > .roleBox{
        width: 4.14rem;
        height: 7.38rem;
        position: absolute;
        top: 10%;
        left: 0;
        right: 0;
        margin: auto;
        > img{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .userInfo {
    text-align: center;
    padding-top: 0.4rem;
    > div {
      font-size: 0.4rem;
      margin-bottom: 0.2rem;
      color: #fff;
    }
    > img {
      width: 1.5rem;
      border-radius: 50%;
    }
  }
  .touchArea {
    width: 4rem;
    height: 4rem;
    background-color: yellowgreen;
    margin: 2rem auto;
    transform-origin: center;
    position: relative;
    .box {
      width: 100%;
      height: 100%;
      background-color: red;
      transform-origin: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
