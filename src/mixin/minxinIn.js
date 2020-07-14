export default {
  data() {
    return {
      num: 1
    };
  },
  created() {
    // this.hello();
    this.num++;
    console.log("先执行mixin");
  },
  methods: {
    hello() {
      console.log("hello form mixinIn");
    }
  }
};
