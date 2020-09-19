<template>
  <div id="root">
    <IncrementCount />
    <DecreaseCount />
    <div>{{ degValue }}---子组件decreasebus传过来的值</div>
    <div>{{ addCount }}---子组件addbus传过来的值</div>
    <div>{{showdata}}---子组件decreasebus传过来的值</div>
    <button click="onchuanzhi">点击传值别组件</button>

    <p>
      eventBus 步骤：1.可以直接创建evenBus.js文件然后单文件引入import eventBus from "@/components/evenBus.js"
      <br />传值方式为 eventBus.$emit("key", this.value);
      <br />
      接收值方式
      eventBus.$on("key", function(value) {
      that.valuee = value;
      });
      <br />
    </p>
    <p>
      2.直接main.js引用Vue.prototype.$EventBus = new Vue();
      this.$EventBus.$emit传值
      this.$EventBus.$on接受值
    </p>
  </div>
</template>

<script>
import IncrementCount from "./child/addBus";
import DecreaseCount from "./child/decreaseBus";

export default {
  name: "App",
  components: {
    IncrementCount,
    DecreaseCount,
  },
  data() {
    return {
      degValue: 0,
      addCount: 0,
      showdata: 0,
    };
  },
  mounted() {
    // 接收A组件的incremented事件
    // this.$EventBus.$on("incremented", ({num, deg}) => {
    //   this.fontCount += num
    //   this.$nextTick(() => {
    //     this.backCount += num
    //     this.degValue += deg
    //   })
    // })
    // // 接收B组件的decreased事件
    // this.$EventBus.$on("decreased", ({num, deg}) => {
    //   this.fontCount -= num
    //   this.$nextTick(() => {
    //     this.backCount -= num
    //     this.degValue -= deg
    //     // 这里触发change事件
    //     this.$EventBus.$emit("change", 1000)
    //   })
    // })
    this.$EventBus.$on("incremented", ({ num, deg }) => {
      this.addCount += num;
      this.backCount += deg;
    });
    this.$EventBus.$on("decreased", ({ num, deg, show_data }) => {
      this.addCount -= num;
      this.degValue -= deg;
      this.showdata = show_data;
    });
  },
  methods: {
    onchuanzhi() {
      this.$EventBus.$emit("change", "别组件传值成功");
    },
  },
};
</script>