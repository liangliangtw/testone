<template>
  <div class="app-container">
    <div>原型：
      <p>每个对象初始化的一个属性prototype,也是一个简单的对象</p>
    </div>
    <div>原型链：
      <p>
        当我们访问一个对象的属性时，如果在这个对象内部不存在这个属性，就会去prototype找这个属性，这个prototype又会有自己的prototype，于是就这样一直往下找
      </p>
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
  
  },
  components: {}
};
</script>

<style scoped lang="scss" >
</style>

