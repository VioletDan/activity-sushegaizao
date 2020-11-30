<template>
  <aside id="ruleCon" :class="{ active: isRule }">
    <div class="box">
      <img src="@/assets/index/ruleTitle.png" class="title" />
      <img src="@/assets/index/ruleTxt.png" class="txt" />
      <img src="@/assets/index/btnClose.png" class="btnClose" @click="close"/>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'g-rule',
  props: {},
  data () {
    return {
      isRule: false
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    open () {
      this.isRule = true
    },
    close () {
      this.isRule = false
    }

  },
  components: {}
}
</script>

<style scoped lang="scss">
#ruleCon {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 300ms;
  z-index: 1;
  background-color: rgba($color: #000000, $alpha: 0.9);
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  .box{
    width: 100%;
    position: absolute;
    top: 1.15rem;
    left: 0;
    text-align: center;
    .title{
      width: 3.25rem;
    }
    .txt{
      width: 7rem;
      margin-top: 0.75rem;
      margin-bottom: 0.8rem;
    }
    .btnClose{
      width: 0.86rem;
    }
  }
}
</style>
