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
      </div>
      <div class="pannel" :class="[isPopup ? 'active' : '']">
        <div class="popup">
          <div class="confirm">
            <img src="@/assets/btnOver.jpg" alt="" />
          </div>
          <div class="container">
            <div class="icon-button icon-button-left">
              <van-icon name="play" :color="iconColor" size="15px" />
            </div>
            <div class="content" ref="contentList">
              <div
                class="item"
                v-for="(item,index) in selectImgObj.currentSmallItem"
                :key="index"
              >
                <img :src="item" alt="" class="thumbnail"
                />
              </div>
            </div>
            <div class="icon-button">
              <van-icon name="play" :color="iconColor" size="15px" />
            </div>
          </div>
        </div>
        <div class="menu">
          <div class="toggle" @click="toggleClick">
            <div class="icon-button">
              <van-icon name="arrow-down" :color="iconColor" :size="iconSize" />
            </div>
          </div>
          <div
            class="icon-button"
            v-for="(item, index) in panelMenuList"
            :key="item.id"
            @click="menuClick(index)"
          >
            <van-icon
              :name="item.cname"
              :color="item.select ? item.ca : item.c"
              :size="iconSize"
            />
            <div class="iconTxt">{{ item.ctx }}</div>
          </div>
        </div>
      </div>
      <div class="userInfo">
        <div>{{ userInfo.Name }}</div>
        <img :src="userInfo.avatar" alt="" />
      </div>
      <div class="touchArea" id="touchArea">
        <div class="box box1"></div>
      </div>
    </section>
    <g-loading @onComplete="onComplete"></g-loading>
  </main>
</template>

<script>
import Touchjs from 'touchjs'
import Mock from 'mockjs'
import { mapState, mapMutations } from 'vuex'
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
      isPopup: true,
      iconColor: '#fff',
      iconSize: '25px',
      selectImgObj: {
        bg: require('@/assets/bg/p1.png'),
        currentSmallItem: [
          require('@/assets/bg/p1_s.png'),
          require('@/assets/bg/p2_s.png'),
          require('@/assets/bg/p3_s.png'),
          require('@/assets/bg/p4_s.png')
        ]
      },
      panelMenuList: [
        {
          c: '#fff',
          ca: '#61bbad',
          cname: 'shop-o',
          select: true,
          id: 0,
          ctx: '宿舍'
        },
        {
          c: '#fff',
          ca: '#61bbad',
          cname: 'user-o',
          select: false,
          id: 1,
          ctx: '角色'
        },
        {
          c: '#fff',
          ca: '#61bbad',
          cname: 'photo-o',
          select: false,
          id: 2,
          ctx: '造型'
        },
        {
          c: '#fff',
          ca: '#61bbad',
          cname: 'goods-collect-o',
          select: false,
          id: 3,
          ctx: '生活'
        },
        {
          c: '#fff',
          ca: '#61bbad',
          cname: 'tv-o',
          select: false,
          id: 4,
          ctx: '娱乐'
        }
      ],
      panelItemList: [
        [
          require('@/assets/bg/p1_s.png'),
          require('@/assets/bg/p2_s.png'),
          require('@/assets/bg/p3_s.png'),
          require('@/assets/bg/p4_s.png')
        ],
        [
          require('@/assets/role/p1_s.png'),
          require('@/assets/role/p2_s.png'),
          require('@/assets/role/p3_s.png'),
          require('@/assets/role/p4_s.png'),
          require('@/assets/role/p5_s.png'),
          require('@/assets/role/p6_s.png'),
          require('@/assets/role/p7_s.png'),
          require('@/assets/role/p8_s.png'),
          require('@/assets/role/p9_s.png'),
          require('@/assets/role/p10_s.png'),
          require('@/assets/role/p11_s.png'),
          require('@/assets/role/p12_s.png')
        ],
        [
          require('@/assets/model/p12_s.png'),
          require('@/assets/model/p1_s.png'),
          require('@/assets/model/p2_s.png'),
          require('@/assets/model/p3_s.png'),
          require('@/assets/model/p4_s.png'),
          require('@/assets/model/p5_s.png'),
          require('@/assets/model/p6_s.png'),
          require('@/assets/model/p7_s.png'),
          require('@/assets/model/p8_s.png'),
          require('@/assets/model/p9_s.png'),
          require('@/assets/model/p10_s.png'),
          require('@/assets/model/p11_s.png')
        ],
        [
          require('@/assets/life/p1.png'),
          require('@/assets/life/p2.png'),
          require('@/assets/life/p3.png'),
          require('@/assets/life/p4.png'),
          require('@/assets/life/p5.png'),
          require('@/assets/life/p6.png'),
          require('@/assets/life/p7.png'),
          require('@/assets/life/p8.png'),
          require('@/assets/life/p9.png'),
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
          require('@/assets/life/p20.png'),
          require('@/assets/life/p21.png'),
          require('@/assets/life/p22.png'),
          require('@/assets/life/p23.png'),
          require('@/assets/life/p24.png'),
          require('@/assets/life/p25.png'),
          require('@/assets/life/p26.png')
        ],
        [
          require('@/assets/hobby/p1.png'),
          require('@/assets/hobby/p2.png'),
          require('@/assets/hobby/p3.png'),
          require('@/assets/hobby/p4.png'),
          require('@/assets/hobby/p5.png'),
          require('@/assets/hobby/p6.png'),
          require('@/assets/hobby/p7.png'),
          require('@/assets/hobby/p8.png'),
          require('@/assets/hobby/p9.png'),
          require('@/assets/hobby/p10.png'),
          require('@/assets/hobby/p11.png'),
          require('@/assets/hobby/p12.png'),
          require('@/assets/hobby/p13.png'),
          require('@/assets/hobby/p14.png')
        ]
      ]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {},
  mounted () {
    this.touchArea = document.getElementById('touchArea')
    this.touchArea.style.webkitTransition = 'all ease 0.05s'
    this.touchAreaBox1 = this.touchArea.childNodes[0]
    this.touchAreaBox2 = this.touchArea.childNodes[1]
    this.init()
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
    toggleClick () {
      this.isPopup = !this.isPopup
    },
    menuClick (index) {
      let _panelMenuList = this.panelMenuList
      for (let i = 0; i < _panelMenuList.length; i++) {
        _panelMenuList[i].select = false
        _panelMenuList[index].select = true
      }
      this.panelMenuList = _panelMenuList
      this.selectImgObj.currentSmallItem = this.panelItemList[index]
      this.$refs.contentList.scrollTop = 0
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
    }
    .pannel {
      position: fixed;
      bottom: 0;
      width: 100%;
      &.active .toggle .icon-button {
        transform: rotate(180deg);
      }
      &.active .popup {
        transform: translateY(-100%);
      }
      .menu {
        width: 100%;
        padding: 0.24rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        z-index: 2;
        position: relative;
        > div {
          flex: 1;
        }
        .toggle {
          position: relative;
          &::before {
            content: "";
            width: 0.04rem;
            height: 100%;
            background-color: rgba($color: #fff, $alpha: 0.5);
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .icon-button {
          transition: transform 0.3s ease;
          .iconTxt {
            font-size: 0.25rem;
            color: #fff;
          }
        }
      }
      .popup {
        position: absolute;
        width: 100%;
        padding: 0.2rem 0.12rem;
        transform: translateY(-37%);
        transition: transform 0.3s ease;
        .confirm {
          margin-bottom: 0.1rem;
          text-align: right;
          width: 100%;
          > img {
            width: 1.93rem;
            display: inline-block;
          }
        }
        .container {
          -webkit-overflow-scrolling: touch;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 0.24rem;
          display: flex;
          align-items: center;
          overflow-x: scroll;
          overflow-y: hidden;
          padding: 0.15rem 0.1rem;
          text-align: left;
          .content {
            height: 1.18rem;
            line-height: 0;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            width: 100%;
            .item {
              display: inline-block;
              .thumbnail {
                display: inline-block;
                height: 1.18rem;
                width: 1.18rem;
              }
            }
            .item:not(:last-child) {
              margin-right: 0.24rem;
            }
          }
          .icon-button {
            padding: 0.3rem 0;
            width: 0.5rem;
          }
          .icon-button-left {
            transform: rotate(180deg);
            margin-right: 0.1rem;
          }
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
