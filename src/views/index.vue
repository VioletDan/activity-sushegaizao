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
        <div
          class="roleBox"
          ref="roleBox"
          v-show="this.selectImgObj.isRole"
        >
          <div class="roleBoxCon" ref="roleBoxCon">
            <img :src="selectImgObj.role" alt="" class="img" />
            <img :src="selectImgObj.model" alt="" class="img" />
          </div>
          <img
            src="@/assets/close.png"
            alt=""
            class="btnClose"
            @click="btnCloseClick('role')"
          />
        </div>
        <div class="lifeBoxList" ref="lifeBoxList" v-show="this.selectImgObj.life.length > 0">
          <div class="lifeItem" v-for="(item,index) in selectImgObj.life" :key="index">
            <img :src="item.src" alt="" class="lifeItemCon"/>
            <img src="@/assets/close.png" alt="" class="btnClose" @click="btnCloseClick('life',item,index)" />
          </div>
        </div>
        <div class="lifeBoxList" ref="hobbyBoxList" v-show="this.selectImgObj.hobby.length > 0">
          <div class="lifeItem" v-for="(item,index) in selectImgObj.hobby" :key="index">
            <img :src="item.src" alt="" class="lifeItemCon" />
            <img src="@/assets/close.png" alt="" class="btnClose" @click="btnCloseClick('hobby',item,index)" />
          </div>
        </div>
      </div>
      <g-pannel @onItemClick="onItemClick" @btnOverClick="btnOverClick"></g-pannel>
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
let timer = null
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
          isAddTouch: false,
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
    this.$nextTick(() => {
      this.roleBox = this.$refs.roleBox
      this.roleBoxCon = this.$refs.roleBoxCon
      this.lifeBoxList = this.$refs.lifeBoxList
      this.hobbyBoxList = this.$refs.hobbyBoxList
    })
  },
  methods: {
    commonTouch (dom, dom2, type, index) {
      let obj
      switch (type) {
        case 1:
          obj = this.selectImgObj.roleInit
          break
        case 2:
          obj = this.selectImgObj.life[index]
          break
        case 3:
          obj = this.selectImgObj.hobby[index]
          break
      }
      console.log(obj)
      Touchjs.on(dom2, 'touchstart', (ev) => {
        dom.classList.add('active')
        ev.preventDefault()
      })
      Touchjs.on(dom2, 'drag', ev => {
        let offx, offy
        obj.dx = obj.dx || 0
        obj.dy = obj.dy || 0
        offx = obj.dx + ev.x + 'px'
        offy = obj.dy + ev.y + 'px'
        dom.style.webkitTransform = 'translate3d(' + offx + ',' + offy + ',0)'
      })
      Touchjs.on(dom2, 'dragend', ev => {
        obj.dx += ev.x
        obj.dy += ev.y
        this.removeActive(dom)
      })
      // 缩放
      Touchjs.on(dom2, 'pinch', ev => {
        obj.currentScale = ev.scale - 1
        obj.currentScale = obj.initialScale + obj.currentScale
        obj.currentScale = obj.currentScale > 2.5 ? 2.5 : obj.currentScale
        obj.currentScale = obj.currentScale < 0.1 ? 0.1 : obj.currentScale
      })
      Touchjs.on(dom2, 'pinchend', ev => {
        obj.initialScale = obj.currentScale
      })
      // 旋转
      Touchjs.on(dom2, 'rotate', ev => {
        var totalAngle = obj.rotate + ev.rotation
        if (ev.fingerStatus === 'end') {
          obj.rotate = obj.rotate + ev.rotation
        }
        dom.style.webkitTransform =
            'scale(' + obj.currentScale + ') rotate(' + totalAngle + 'deg)'
      })
      // 结束
      Touchjs.on(dom2, 'touchend', (ev) => {
        this.removeActive(dom)
      })
    },
    removeActive (dom) {
      if (icom.hasClass(dom, 'active')) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          dom.classList.remove('active')
        }, 1000)
      }
    },
    onComplete (val) {
      if (val) {
      }
    },
    btnCloseClick (val, item, index) {
      if (timer) clearTimeout(timer) // 清除定时器
      switch (val) {
        case 'role':
          this.selectImgObj.isRole = false
          this.selectImgObj.role = ''
          this.selectImgObj.model = ''
          this.roleBox.style.webkitTransform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)'
          this.selectImgObj.roleInit = {
            isAddTouch: true,
            dx: 0,
            dy: 0,
            rotate: 0,
            currentScale: '',
            initialScale: 1
          }
          break
        case 'life':
          this.selectImgObj.life.splice(index, 1)
          break
        case 'hobby':
          this.selectImgObj.hobby.splice(index, 1)
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
            if (!this.selectImgObj.roleInit.isAddTouch) {
              this.commonTouch(this.roleBox, this.roleBoxCon, 1)
              this.selectImgObj.roleInit.isAddTouch = true
            }
          }
          break
        case 2:
          this.selectImgObj.model = require(`@/assets/model/p${val.currentSmallItemIndex +
            1}.png`)
          this.selectImgObj.isRole = true
          if (!this.selectImgObj.role) {
            this.selectImgObj.role = require(`@/assets/role/p${num}.png`)
            this.commonTouch(this.roleBox, this.roleBoxCon, 1)
          }
          break
        case 3:
          this.selectImgObj.life.push(
            {
              isAddTouch: false,
              dx: 0,
              dy: 0,
              rotate: 0,
              currentScale: '',
              initialScale: 1,
              src: require(`@/assets/life/p${val.currentSmallItemIndex + 1}.png`)
            }
          )
          this.renderLifeItem(this.lifeBoxList, 'life', 2)
          break
        case 4:
          this.selectImgObj.hobby.push(
            {
              dx: 0,
              dy: 0,
              rotate: 0,
              currentScale: '',
              initialScale: 1,
              src: require(`@/assets/hobby/p${val.currentSmallItemIndex + 1}.png`)
            }
          )
          this.renderLifeItem(this.hobbyBoxList, 'hobby', 3)
          break
      }
    },
    renderLifeItem (dom, typeStr, type) {
      this.$nextTick(() => {
        let ItemArr = dom.childNodes
        this.selectImgObj[typeStr].forEach((value, index) => {
          if (!value.isAddTouch) {
            value.isAddTouch = true
            this.commonTouch(ItemArr[index], ItemArr[index].childNodes[0], type, index)
          }
        })
      })
    },
    touchArr () {

    },
    btnOverClick (val) {
      console.log('改造完成,合成图片', val)
    },
    ...mapMutations(['STOREchangeUserInfo'])
  }
}
</script>

<style scoped lang="scss">
#atricle {
  touch-action: none;
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: 0 0;
  overflow-y: hidden;
  overflow-x: hidden;
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
        transition: all ease 0.05s;
         &.active {
           > .roleBoxCon{
             border: 1px dashed #fff;
           }
           > .btnClose{
             display: block;
           }
          }
        > .roleBoxCon {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: all ease 0.05s;
          border: 1px dashed transparent;
          > .img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      > .lifeBoxList{
        width: 1.6rem;
        height: 1.6rem;
        position: absolute;
        top: 50%;
        right: 10%;
        > .lifeItem{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: all ease 0.05s;
          border: 1px dashed transparent;
          &.active{
            border: 1px dashed #fff;
            > .btnClose{
             display: block;
           }
          }
          > .lifeItemCon{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .btnClose {
        width: 0.48rem;
        height: 0.48rem;
        position: absolute;
        top: -0.46rem;
        right: -0.46rem;
        display: none;
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
#atricle.screen159,
#atricle.screenNormal {
  #home .touchBox .roleBox {
    top: 40%;
  }
}
</style>
