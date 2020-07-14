import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    chuanzhiobj: {},
    name: "ll",
    age: 25
  },
  mutations: {
    add(state) {
      state.num++;
    },
    del(state) {
      state.num--;
    },
    add10(state, val) {
      state.num += val;
    },
    chuanzhi(state, obj) {
      state.chuanzhiobj = obj;
    }
  },
  actions: {
    yanchi10(context) {
      setTimeout(() => {
        context.commit("add");
      }, 1000);
    }
  },
  getters: {
    nameInfo(state) {
      return "姓名:" + state.name;
    },
    fullInfo(state, getters) {
      return getters.nameInfo + "年龄:" + state.age;
    }
  }
});
