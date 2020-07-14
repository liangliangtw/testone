<template>
  <div class="app-container">
    <button @click="zichuan">子组件点击可以传值</button>
    <div>
      父组件调用子组件方法：{{num}}
    </div>
  </div>
</template>

<script>
import eventBus from "@/components/evenBus.js";
export default {
  name: "child",
  data() {
    return {
      zitext: "子组件传值过来啦",
      value: "88",
      num: 0
    };
  },
  mounted() {
    console.log("mounted子组件");
  },
  computed: {},
  methods: {
    zichuan() {
      this.$emit("fu", this.zitext);
      eventBus.$emit("key", this.value);
    },
    addnum() {
      this.num++;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
