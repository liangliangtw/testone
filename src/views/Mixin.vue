<template>
  <div class="about">
    {{ text }}
    {{ num }}
    <div>生命周期先执行mixin后执行template</div>
    <div>相同变量以组件变量为主</div>
    <div>
      methods, components
      和directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。（以组件为主）
    </div>
  </div>
</template>
<script>
import mixinIn from "@/mixin/minxinIn.js";
export default {
  name: "",
  data() {
    return {
      text: "templay",
      num: 5
    };
  },
  mixins: [mixinIn],
  created() {
    this.hello();
    this.num++;
    console.log("后执行template");
  },
  methods: {
    // addone() {
    //   this.num++;
    // },
    // hello() {
    //   console.log("hello form template");
    // }
  }
};
</script>
<style>
.el-table th,
.el-table tr {
  background-color: #092d64;
  pointer-events: none;
  color: white;
  opacity: 0.9;
}
/* .table {
  box-shadow: 0px 0px 3px 3px rgba(53, 217, 243, 0.33);
  border: 0.5px solid rgba(34, 245, 255, 1);
} */
.el-table {
  /* box-shadow: 0px 0px 7px 5px rgba(0, 249, 255, 0.28); */
}
/* .about {
  background-color: #092d64;
  width: 900px;
} */
.el-table--border:after,
.el-table--group:after,
.el-table:before {
  /* box-shadow: 0px 0px 7px 5px rgba(0, 249, 255, 0.28); */
  background-color: #22f5ff;
}

.el-table--border,
.el-table--group {
  /* box-shadow: 0px 0px 7px 5px rgba(0, 249, 255, 0.28); */
  border-color: #22f5ff;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #22f5ff;
}

.el-table--border th,
.el-table--border th.gutter:last-of-type {
  border-bottom: 1px solid #22f5ff;
}

.el-table--border td,
.el-table--border th {
  border-right: 1px solid #22f5ff;
}
</style>
