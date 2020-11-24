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
        <div class="roleBox active" ref="roleBox" v-show="this.selectImgObj.isRole">
          <img :src="selectImgObj.model" alt="" class="img"/>
          <img :src="selectImgObj.role" alt="" class="img"/>
          <img src="@/assets/close.png" alt="" class="btnClose" @click.="btnCloseClick(1)"/>
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
// eslint-disable-next-line no-unused-vars
import Mock from 'mockjs'
import { mapState, mapMutations } from 'vuex'
import imath from 'common/js/math'
import icom from 'common/js/com'
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
        roleInit: {
          dx: 0,
          dy: 0,
          rotate: 0,
          currentScale: '',
          initialScale: 1
        },
        isRole: false,
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
    icom.init()
    this.roleBox = this.$refs.roleBox
    // this.touchArea = document.getElementById('touchArea')
    // this.touchArea.style.webkitTransition = 'all ease 0.05s'
    // this.touchAreaBox1 = this.touchArea.childNodes[0]
    // this.touchAreaBox2 = this.touchArea.childNodes[1]
    // this.init()
  },
  methods: {
    commonTouch (dom, type) {
      let obj = this.selectImgObj.roleInit

      Touchjs.on(dom, 'touchstart', function (ev) {
        console.log(ev, '=======================')
        ev.preventDefault()
      })
      Touchjs.on(dom, 'drag', ev => {
        let offx, offy
        if (type === 1) {
          obj.dx = obj.dx || 0
          obj.dy = obj.dy || 0
          offx = obj.dx + ev.x + 'px'
          offy = obj.dy + ev.y + 'px'
        }
        dom.style.webkitTransform =
          'translate3d(' + offx + ',' + offy + ',0)'
      })
      Touchjs.on(dom, 'dragend', ev => {
        if (type === 1) {
          obj.dx += ev.x
          obj.dy += ev.y
        }
      })
      // 缩放
      Touchjs.on(dom, 'pinch', ev => {
        if (type === 1) {
          obj.currentScale = ev.scale - 1
          obj.currentScale = obj.initialScale + obj.currentScale
          obj.currentScale = obj.currentScale > 2.5 ? 2.5 : obj.currentScale
          obj.currentScale = obj.currentScale < 0.1 ? 0.1 : obj.currentScale
        }
      })
      Touchjs.on(dom, 'pinchend', ev => {
        if (type === 1) {
          obj.initialScale = obj.currentScale
        }
      })
      // 旋转
      Touchjs.on(dom, 'rotate', ev => {
        if (type === 1) {
          var totalAngle = obj.rotate + ev.rotation
          if (ev.fingerStatus === 'end') {
            obj.rotate = obj.rotate + ev.rotation
          }
          dom.style.webkitTransform =
          'scale(' + obj.currentScale + ') rotate(' + totalAngle + 'deg)'
        }
      })
    },
    onComplete (val) {
      if (val) {
      }
    },
    btnCloseClick (val) {
      console.log(val)
      switch (val) {
        case 1:
          this.selectImgObj.isRole = false
          this.selectImgObj.role = ''
          this.selectImgObj.model = ''
          break
      }
    },
    btnStartClick () {
      this.isHome = true
    },
    onItemClick (val) {
      var num = imath.randomRange(1, 12)
      switch (val.typeIndex) {
        case 0:
          this.selectImgObj.bg = require(`@/assets/bg/p${val.currentSmallItemIndex +
            1}.png`)
          break
        case 1:
          this.selectImgObj.role = require(`@/assets/role/p${val.currentSmallItemIndex +
            1}.png`)
          this.selectImgObj.isRole = true
          if (!this.selectImgObj.model) {
            this.selectImgObj.model = require(`@/assets/model/p${num}.png`)
            this.commonTouch(this.roleBox, 1)
          }
          break
        case 2:
          this.selectImgObj.model = require(`@/assets/model/p${val.currentSmallItemIndex +
            1}.png`)
          this.selectImgObj.isRole = true
          if (!this.selectImgObj.role) {
            this.selectImgObj.role = require(`@/assets/role/p${num}.png`)
            this.commonTouch(this.roleBox, 1)
          }
          break
        case 3:
          this.selectImgObj.life.push(
            require(`@/assets/life/p${val.currentSmallItemIndex + 1}.png`)
          )
          break
        case 4:
          this.selectImgObj.hobby.push(
            require(`@/assets/hobby/p${val.currentSmallItemIndex + 1}.png`)
          )
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
      > .roleBox {
        width: 4.14rem;
        height: 7.38rem;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: -3.69rem auto 0;
        pointer-events: none;
        transition: transform 50ms;
        &.active {
          border: 1px dashed #fff;
          pointer-events: all;
        }
        > .img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .btnClose{
        width: 0.48rem;
        height: 0.48rem;
        position: absolute;
        top: -0.46rem;
        right: -0.46rem;
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
#atricle.screen159,#atricle.screenNormal{
  #home .touchBox .roleBox{
    top: 40%;
  }
}
</style>
