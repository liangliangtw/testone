<template>
  <button @click="decrease()"> -减 </button>
</template>

<script>
export default {
  name: 'DecreaseBus',
  data() {
    return {
      num: 1,
      deg: 1,
      show_data: 1000
    }
  },
  methods: {
    decrease() {
      this.$EventBus.$emit("decreased", {
        num: this.num,
        deg: this.deg,
        show_data: this.show_data  // show_data就是要传递到组件A的值
      })
    }
  }
}
</script>