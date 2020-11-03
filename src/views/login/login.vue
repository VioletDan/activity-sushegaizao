<template>
  <div id="atricle">
    <div class="touchArea"></div>
  </div>
</template>

<script>
// import VueDragResize from 'vue-drag-resize'
// eslint-disable-next-line no-unused-vars
import Touchjs from 'touchjs'

export default {
  name: 'atricle',

  components: {},

  data () {
    return {}
  },
  created () {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      Touchjs.on('.touchArea', 'touchstart pinchin', function (ev) {
        console.log(ev)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.touchArea {
  width: 400px;
  height: 400px;
  background-color: yellowgreen;
  margin: 100px auto;
}
</style>
