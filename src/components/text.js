import Vue from "vue";
import ImageViewer from "../../node_modules/element-ui/packages/image/src/image-viewer";
// node_modules\element-ui\packages\image\src\image-viewer.vue
const ImagePreviewer = Vue.extend({
  components: { ImageViewer },
  data() {
    return {
      urls: [],
      index: 0,
      show: false
    };
  },
  render(h) {
    if (!this.show) return h();
    return h("image-viewer", {
      props: {
        zIndex: 2002,
        urlList: this.urls,
        initialIndex: this.index,
        onClose: () => {
          this.show = false;
          this.$emit("onClose", this.$el);
        }
      }
    });
  }
});

export default {
  install(vue) {
    let vmList = [];
    vue.prototype.$previewImage = function({ urls = [], index = 0 }, e) {
      // 防止点击关闭按钮冒泡到被点击的元素上，重新预览
      // console.log(e, "e");

      if (
        e &&
        e.target.tagName === "I" &&
        e.target.className.indexOf("el-icon-circle-close") !== -1
      ) {
        return;
      }

      if (!Array.isArray(urls)) {
        throw new Error("urls must be Array type.");
      }
      index = parseInt(index, 0);
      if (Number.isNaN(index)) {
        throw new Error("index must be Number type");
      }
      if (index >= urls.length) {
        index = 0;
      }
      const el = document.createElement("div");
      const vm = new ImagePreviewer(); // 使用被点击元素本身作为容器，是为了防止被点击的元素zIndex较高，覆盖该弹窗问题

      const anchor = e.path
        .filter(t => t instanceof HTMLElement)
        .find(t => getComputedStyle(t).position === "fixed");
      if (anchor) {
        anchor.appendChild(el);
      } else {
        document.body.appendChild(el);
      }
      vm.$once("onClose", $el => {
        vm.$destroy();
        vm.$el.parentNode.removeChild(vm.$el);
        vmList = vmList.filter(t => t.$el !== $el);
      });
      vm.urls = urls;
      vm.index = index;
      vm.show = true;
      vm.$mount(el);
      vmList.push(vm);
    };
  }
};
