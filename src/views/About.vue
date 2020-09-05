<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="test">
      <img :src="urlss" alt style="wigth:200px" class="img" @click="big($event)" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  data() {
    return {
      agagin: [],
      agagintable: [],
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        // {
        //   path:
        //     "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        // },
        // {
        //   path:
        //     "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        // }
      ],
      urlss: require("@/assets/logo.png"),
    };
  },
  components: {},

  methods: {
    big(e) {
      console.log(e);

      this.$previewImage(
        {
          urls: this.srcList,
        },
        e
      );
    },
  },
};
</script>
<style scoped>
.test {
  display: flex;
  flex-shrink: 0;
  /* align-items: center;
  justify-content: center; */
  /* align-items: flex-start; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
}
.img {
  flex-shrink: 0;
}
/* .text {
  flex: auto;
}  */
</style>
