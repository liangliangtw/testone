<template>
  <div class="app-container">
    <div>
      安装路由插件，新增router.js文件，export.default new Router,
      path:'',name:'',component
    </div>
    <div>
      路由钩子：全局路由钩子：beforeEach afterEach
      单路由钩子：beforeEnter
      组件路由钩子：beforeRouteEnter，beforeRouteUpdate，beforeRouteLeave
    </div>
    <div>
      route：路由元对象 path params query name
      router：路由实例 push history
    </div>
    <div>
      query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
      query刷新会丢失参数
    </div>
    <div>
      刚才已经说了，query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。

      注意接收参数的时候，已经是$route而不是$router了哦！！
    </div>
    <div>
      <Button @click="paramsB">params</Button>
      <Button @click="queryB">query</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    queryB() {
      this.$router.push({
        path: "/review",
        query: {
          code: 10011
        }
      });
    },
    paramsB() {
      this.$router.push({
        name: "Chuanzhi",
        params: {
          code: 1000
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped  >
</style>
