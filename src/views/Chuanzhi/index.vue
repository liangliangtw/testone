<template>
  <div class="app-container">
    <div>父组件收子组件传值:{{ text }}</div>
    <child-page @fu="shouzichuanzhi($event)" ref="child" @hook:mounted="doSomething"></child-page>
    <div>evenbus传值:{{ valuee }}</div>
    <Button @click="diaoychild">调用子组件方法</Button>
  </div>
</template>

<script>
import ChildPage from "./child/index.vue";
import eventBus from "@/components/evenBus.js";
export default {
  data() {
    return {
      text: "",
      valuee: "",
    };
  },
  mounted() {
    this.bus();
    console.log(this.$route.params.code);
  },
  computed: {},
  methods: {
    shouzichuanzhi(e) {
      this.text = e;
    },
    bus() {
      let that = this;
      eventBus.$on("key", function (value) {
        // console.log(value, "key");
        that.valuee = value;
      });
    },
    diaoychild() {
      this.$refs.child.addnum();
    },
    doSomething() {
      console.log("监听到子组件mounted时");
    },
  },
  components: { ChildPage },
};
</script>

<style scoped></style>
