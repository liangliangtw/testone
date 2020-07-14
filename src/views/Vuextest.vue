<template>
  <div class="app-container">
    vueX:{{num}}
    <div>getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的。</div>
    <div style="margin-top:20px">
      <Button @click="add">add</Button>
      <Button @click="add10(val)">add10</Button>
      <Button @click="del">del</Button>
      <Button @click="chuanzhi(obj)">传obj</Button>
      <Button @click="yanchi10">延迟1秒增加</Button>
    </div>
    <div>
      vueX:{{chuanzhiobj}}
    </div>
    <div>
      vueX:{{fullInfo}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { prototype } from "stream";
export default {
  data() {
    return {
      val: 10,
      obj: {
        name: "ll",
        age: "26"
      }
      // obj: 5
    };
  },
  mounted() {
    console.log(this.val);

    // this.yanchi10();
  },
  computed: {
    ...mapState(["num", "chuanzhiobj", "name"]),
    ...mapGetters(["fullInfo"])
  },
  methods: {
    ...mapMutations(["add", "add10", "chuanzhi"]),
    ...mapActions(["yanchi10"]),
    // add() {
    //   this.$store.commit("add");
    // },
    del() {
      this.$store.commit("del");
    }
    // add10() {
    //   this.$store.commit("add10", this.val);
    // },
    // chuanobj() {
    //   this.$store.commit("chuanzhiobj", this.obj);
    // },
    // yan1s() {
    //   this.$store.dispatch("yanchi10");
    // }
  },
  components: {}
};
</script>

<style scoped  >
button {
  margin-left: 10px;
}
div {
  margin-top: 10px;
}
</style>
