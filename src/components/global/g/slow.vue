<template>
  <aside id="slowCon">
    <div class="box" :class="{active : isActive}">
      <div
        class="img slow1"
        :style="{
          backgroundImage: 'url(' + require('@/assets/index/slow.png') + ')'
        }"
      ></div>
      <div
        class="img slow2"
        :style="{
          backgroundImage: 'url(' + require('@/assets/index/slow.png') + ')'
        }"
      ></div>
      <div
        class="img slow3"
        :style="{
          backgroundImage: 'url(' + require('@/assets/index/slow.png') + ')'
        }"
      ></div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'g-slow',
  props: {},
  data () {
    return {
      isActive: false
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    leafOn () {
      this.isActive = true
    },
    leafOff () {
      this.isActive = false
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
#slowCon {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  > .box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    perspective: 5rem;
    transform-style: preserve-3d;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms;
    &.active {
      opacity: 1;
      > .img{
        animation-play-state: running;
      }
    }
    > .img {
      position: absolute;
      width: 7.5rem;
      height: 16.24rem;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
      -webkit-transform-style: preserve-3d;
      animation-duration: 30s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: paused;
    }
    .slow1 {
      animation-name: animStar;
      top: -40%;
    }
    .slow2 {
      animation-name: animStar2;
      top: 0%;
    }
    .slow3 {
      animation-name: animStar3;
      top: 40%;
    }
  }
}
@keyframes animStar {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 8.7rem 0;
  }
}
@keyframes animStar2 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 12rem;
  }
}
@keyframes animStar3 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 8.7rem 12rem;
  }
}
</style>
