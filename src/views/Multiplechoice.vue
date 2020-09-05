<template>
  <div class="app-container">
    <div class="test">
      <p
        v-for="(item, index) in subjects"
        :key="index"
        :class="{ select: item.selected }"
        @click="changeCss(item)"
      >{{ item.name }}</p>
    </div>

    <!-- <div>vueX:{{$store.state.num}}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: [],
      author: "微信公众号 haiyan",
      subjects: [
        { name: "历史", selected: false },
        { name: "地理", selected: false },
        { name: "生物", selected: false },
        { name: "政治", selected: false },
        { name: "技术", selected: false },
        { name: "物理", selected: false },
        { name: "化学", selected: false },
      ],
    };
  },
  computed: {},
  methods: {
    changeCss(item) {
      if (!item.selected) {
        item.selected = true;
        this.selectedItem.push(item.name);
      } else if (item.selected) {
        item.selected = false;
        const i = this.selectedItem.indexOf(item.name);
        this.selectedItem.splice(i, 1);
      }
      console.log(this.selectedItem);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.test {
  display: flex;
}
.test p {
  margin: 30px;
}
</style>
