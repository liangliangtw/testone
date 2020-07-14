<template>
  <div class="app-container">
    <p title="kanwo">aaa</p>
    <!-- <div class="template1">
      <p><button @click="addtwo">组件2</button></p>
      template2里的num:{{ num }}
    </div> -->
    <div>h5新增属性</div>
    <p>nav/header/footer/canvas/video</p>
    <div>CSS3新增属性</div>
    <p>transition/transform/text-shadow/box-shadow/animation</p>
    <div>diff算法</div>
    <p>调用一个名为path()函数对比新旧节点，对真实的dom节点打补丁</p>
    <p></p>
    <p>
      1.发送请求到DNS服务器，获取对应的web服务器和ip地址2.与对应的web服务器建立TCP链接3.发送http请求到web服务器4.web服务器响应并返回状态，返回数据和html源文件
      5.浏览器接收数据和下载html文件6.浏览器生成dom树，解析js和css，并渲染
    </p>
    <p>document.createElement</p>
    <p>createChild()</p>
    <p>removeChild()</p>
    <p>replaceChild()</p>
    <p>appenChild</p>
    <div>vue的双向绑定原理</div>
    <p>
      通过Object.defineProperty劫持各个属性的setter和getter，在数据发生变动的时候发送消息给订阅者，触发响应监听回调
    </p>
    <div>proxy和Object.defineProperty的区别</div>
    <p>
      proxy可以直接监听对象和属性的变化，并且多达13种劫持方法，不仅限于apply，defineProperty等等，proxy直接返回一个新对象，我们可以直接操作新对象达到目的，而不像defineProperty需要遍历对象修改
    </p>

    <p>watch和Computed区别</p>
    <p>
      computed具有缓存特性，在依赖响应式数据发生变化的情况下才会触发下一次计算
    </p>
    <p>watch不具备缓存特性，在执行异步操作或者数据开销较大情况下使用</p>
    <div>组件通信</div>
    <p>父传子：props 子传父：$emit 兄弟：EventBus或者vuex $attrs和$listener</p>
    <div>
      nextTick和set：
      <p>
        nextTick：在DOM数据循环更新后执行延迟回调，set对于一些直接修改数组属性或者长度等变化时无法实时更新
      </p>
    </div>
    <div>
      Vuex
      <p>
        getters，state，mutation，actions，module，
        mutations和actions区别：一个是commit提交，一个是dispath提交，mutations同步操作改变state，actions可异步操作提交mutations改变state
      </p>
    </div>
    <div>
      key的作用：
      <p>提高diff操作的准确性，避免状态错乱和就地复用</p>
    </div>
    <div>keep-alive用于缓存组件实例，有两个属性，include和exclude</div>
    <div>
      document.getElementById;document.getElementsByTagName;document.getElementsByName
    </div>
    <div>
      cookie储存数据只有4k大小，请求时候会携带在请求头上，增加带宽，可设置过期时间；session会话或者浏览器关闭就会清除储存数据，储存大小5M；local储存大小5M，永久性储存只有手动清除才会清除。
    </div>

    <div>
      准确判断数据类型：
      <p>Object.prototype.toString.call()</p>
    </div>
    <div>
      基础数据类型：
      <p>
        undefined;null;Boolean;number;string;symbol
      </p>
    </div>
    <div>

      闭包
      <p>
        最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中
      </p>
      <p>
        闭包的另一个用处，是封装对象的私有属性和私有方法
      </p>

    </div>
  </div>
</template>

<script>
// import mixinIn from "../assets/minxinIn.js";
export default {
  components: {},
  // mixins: [mixinIn],
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query.code);
  },
  methods: {
    // A(name) {
    //   this.name = name;
    // },
    // addtwo() {
    //   this.num += 2;
    // }
  }
};
</script>

<style scoped>
.app-container {
  padding: 0px 100px;
}
div {
  color: brown;
}
p {
  color: black;
}
</style>
