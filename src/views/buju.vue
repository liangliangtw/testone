<template>
  <div class="app-container">
    <div id="container">
      <div id="left" class="column">left</div>
      <div id="center" class="column">center</div>

      <div id="right" class="column">right</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
// .content {
//   width: 100%;
//   position: relative;
//   .left,
//   .center,
//   .right {
//     height: 200px;
//   }
//   .left,
//   .right {
//     width: 300px;
//     background-color: red;
//   }
//   .left {
//     // position: absolute;
//     // left: 0;

//   }
//   .right {
//     // position: absolute;
//     // right: 0;

//   }
//   .center {
//     // position: absolute;
//     // left: 300px;
//     // right: 300px;
//     background-color: blue;
//   }
// }

// #container {
//   padding-left: 200px;
//   padding-right: 150px;
// }
#container .column {
  // float: left;
  height: 200px;
}
// #center {
//   background-color: blue;
//   width: 100%;
// }
// #left {
//   background-color: red;
//   width: 200px;
//   margin-left: -100%;
//   position: relative;
//   right: 200px;
// }
// #right {
//   background-color: red;
//   width: 150px;
//   margin-right: -150px;
// }
#container {
  display: flex;
}
#center {
  background-color: blue;
  flex: 1;
}
#left,
#right {
  background-color: red;
  width: 200px;
}
</style>