<template>
  <main id="atricle">
    <div class="touchArea" id="touchArea">
      <div class="box box1"></div>
    </div>
  </main>
</template>

<script>
// import VueDragResize from 'vue-drag-resize'
// eslint-disable-next-line no-unused-vars
import Touchjs from 'touchjs'
// import imath from 'common/js/math'
export default {
  name: 'atricle',

  components: {},

  data () {
    return {
      mutiTouch: null,
      posLast1: [],
      posLast2: [],
      disLast: null,
      disSt: null,
      rotateLast: null,
      dx: 0,
      dy: 0,
      scale: 1,
      rotate: 0,
      touchArea: '',
      currentScale: '',
      initialScale: 1
    }
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
      Touchjs.on(this.touchArea, 'drag', (ev) => {
        this.dx = this.dx || 0
        this.dy = this.dy || 0
        console.log('当前x值为:' + this.dx + ', 当前y值为:' + this.dy + '.')
        var offx = this.dx + ev.x + 'px'
        var offy = this.dy + ev.y + 'px'
        this.touchArea.style.webkitTransform = 'translate3d(' + offx + ',' + offy + ',0)'
      })
      Touchjs.on(this.touchArea, 'dragend', (ev) => {
        this.dx += ev.x
        this.dy += ev.y
      })
      // 缩放
      Touchjs.on(this.touchArea, 'pinch', (ev) => {
        this.currentScale = ev.scale - 1
        console.log(this.initialScale, this.currentScale)
        this.currentScale = this.initialScale + this.currentScale
        this.currentScale = this.currentScale > 2.5 ? 2.5 : this.currentScale
        this.currentScale = this.currentScale < 0.1 ? 0.1 : this.currentScale
        // this.touchAreaBox1.style.webkitTransform = 'scale(' + this.currentScale + ')'
        console.log('当前缩放比例为:' + this.currentScale + '.')
      })
      Touchjs.on(this.touchArea, 'pinchend', (ev) => {
        this.initialScale = this.currentScale
      })
      // 旋转
      Touchjs.on(this.touchArea, 'rotate', (ev) => {
        var totalAngle = this.rotate + ev.rotation
        if (ev.fingerStatus === 'end') {
          this.rotate = this.rotate + ev.rotation
        }
        this.touchAreaBox1.style.webkitTransform = 'scale(' + this.currentScale + ') rotate(' + totalAngle + 'deg)'
      })
    }
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
}
.touchArea {
  width: 4rem;
  height: 4rem;
  background-color: yellowgreen;
  // margin: 100px auto;
  transform-origin: center;
  position: relative;
  .box {
    width: 100%;
    height: 3rem;
    background-color: red;
    transform-origin: center;
    position: absolute;
    top: 0;left: 0;
  }
}
</style>
