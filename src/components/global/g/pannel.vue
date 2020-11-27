<template>
  <div class="pannelCon">
    <div class="pannel" :class="[isPopup ? 'active' : '']">
      <div class="popup">
        <div class="confirm">
          <img src="@/assets/btnOver.jpg" alt="" @click="btnOverClick"/>
        </div>
        <div class="container">
          <div class="icon-button icon-button-left">
            <van-icon name="play" :color="iconColor" size="15px" />
          </div>
          <div class="content" ref="contentList">
            <div class="item" v-for="(item, index) in currentSmallItemList" :key="index" @click="onItemClick(index)">
              <img :src="item" alt="" class="thumbnail" />
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
  </div>
</template>

<script>
export default {
  name: 'g-pannel',
  props: {},
  data () {
    return {
      isPopup: true,
      iconColor: '#fff',
      iconSize: '25px',
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
          require('@/assets/model/p11_s.png'),
          require('@/assets/model/p12_s.png')
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
      ],
      currentSmallItemList: [],
      currentSmallItemIndex: 0 // 0宿舍 1角色 2造型 3生活 4娱乐  012需要大图
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.init()
  },
  watch: {},
  methods: {
    init () {
      this.currentSmallItemList = this.panelItemList[0]
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
      this.currentSmallItemList = this.panelItemList[index]
      this.currentSmallItemIndex = index
      this.$refs.contentList.scrollLeft = 0
    },
    // 每项点击
    onItemClick (index) {
      let obj = {
        currentSmallItemIndex: index, // 选择的某一项
        typeIndex: this.currentSmallItemIndex // 5种类型的索引
      }
      this.$emit('onItemClick', obj)
    },
    btnOverClick () {
      this.$emit('btnOverClick', true)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.pannelCon {
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
          margin: 0 auto;
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
          margin: 0 auto;
          width: 100%;
          transition: all 300ms;
          .item {
            display: inline-block;
            text-align: center;
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
</style>
