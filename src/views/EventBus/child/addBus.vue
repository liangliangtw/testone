<template>
  <button @click="increment()">+ 加并接受另一个组件的值！</button>
</template>

<script>
export default {
  name: 'AddBus',
  data() {
    return {
      num: 1,
      deg: 1
    };
  },
  methods: {
    increment() {
      this.$EventBus.$emit("incremented",{
        num: this.num,
        deg: this.deg
      });
    }
  },
  mounted() {
    // 这是响应change事件
    this.$EventBus.$on("change", test => {
      console.log(test)
    })
  }
}
</script>