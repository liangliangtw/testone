<template>
  <div class="app-container">
    <div>直接在config.js上配置proxy</div>
    <div>
      <Button @click="test">点击测试跨域</Button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    test() {
      axios.get("/api/getok.php").then(res => {
        console.log(res, "res");
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
