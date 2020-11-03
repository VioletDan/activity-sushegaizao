<template>
  <main id="atricle">
    <div class="touchArea" id="touchArea">
      <div class="box"></div>
    </div>
  </main>
</template>

<script>
// import VueDragResize from 'vue-drag-resize'
// eslint-disable-next-line no-unused-vars
import Touchjs from 'touchjs'
import imath from 'common/js/math'
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
      touchArea: ''
    }
  },
  created () {},
  mounted () {
    this.touchArea = document.getElementById('touchArea')
    this.touchAreaBox = this.touchArea.childNodes[0]
    this.init()
  },
  methods: {
    init () {
      var _self = this
      Touchjs.on(this.touchArea, 'touchstart', function (e) {
        // 移动开始时的函数
        if (e.originEvent.touches.length === 1) {
          _self.mutiTouch = false
          _self.posLast1 = [
            e.originEvent.touches[0].clientX,
            e.originEvent.touches[0].clientY
          ]
        } else if (e.originEvent.touches.length >= 2) {
          _self.mutiTouch = true
          _self.posLast1 = [
            e.originEvent.touches[0].clientX,
            e.originEvent.touches[0].clientY
          ]
          _self.posLast2 = [
            e.originEvent.touches[1].clientX,
            e.originEvent.touches[1].clientY
          ]
          _self.disLast = imath.getDis(_self.posLast1, _self.posLast2)
          _self.rotateLast = imath.getDeg(_self.posLast1, _self.posLast2)
        } // end if
      })
      Touchjs.on(this.touchArea, 'touchmove', function (e) {
        // 移动开始时的函数
        e.preventDefault()
        if (e.originEvent.touches.length === 1) {
          var pos1 = [
            e.originEvent.touches[0].clientX,
            e.originEvent.touches[0].clientY
          ]
          _self.pinchmove([pos1[0] - _self.posLast1[0], pos1[1] - _self.posLast1[1]])
          _self.posLast1[0] = pos1[0]
          _self.posLast1[1] = pos1[1]
        } else if (e.originEvent.touches.length >= 2) {
          // eslint-disable-next-line no-redeclare
          var pos1 = [
            e.originEvent.touches[0].clientX,
            e.originEvent.touches[0].clientY
          ]
          var pos2 = [
            e.originEvent.touches[1].clientX,
            e.originEvent.touches[1].clientY
          ]
          var dis = imath.getDis(pos1, pos2)
          if (Math.abs(dis - _self.disLast) > 0.5) {
            _self.pinchscale([
              (0.025 * (dis - _self.disLast)) / Math.abs(dis - _self.disLast)
            ])
          } // end if
          var rotate = imath.getDeg(pos1, pos2)
          if (rotate !== _self.rotateLast) _self.pinchrotate([rotate - _self.rotateLast])
          _self.posLast1[0] = pos1[0]
          _self.posLast1[1] = pos1[1]
          _self.posLast2[0] = pos2[0]
          _self.posLast2[1] = pos2[1]
          _self.disLast = dis
          _self.rotateLast = rotate
        } // end if
      })

      Touchjs.on(this.touchArea, 'touchend', function (e) {
        // 移动开始时的函数
        // Touchjs.off(this.touchArea, 'touchmove')
      })
    },
    pinchmove (data) {
      this.dx += data[0]
      this.dy += data[1]
      this.touchArea.style.webkitTransform = 'translate3d(' + this.dx + 'px,' + this.dy + 'px,0)'
    },
    pinchscale (scaleOffset) {
      // console.log(scaleOffset)
      this.scale += scaleOffset[0]
      this.scale = this.scale < 0.1 ? 0.1 : this.scale
      this.scale = this.scale > 2.5 ? 2.5 : this.scale
      this.touchAreaBox.style.webkitTransform = 'scale(' + this.scale + ')'
    },
    pinchrotate (rotateOffset) {
      // console.log(rotateOffset)
      this.rotate += rotateOffset[0]
      this.touchAreaBox.style.webkitTransform = 'rotate(' + this.rotate + 'deg)'
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
  .box {
    width: 100%;
    height: 3rem;
    background-color: red;
    transform-origin: center;
  }
}
</style>
