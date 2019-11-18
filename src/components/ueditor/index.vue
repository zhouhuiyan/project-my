<template>
  <div id="editor"></div>
</template>

<script>
var e = require("wangeditor");
export default {
  props: {
    defaultMsg: {
      default: "文章标题",
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    var E = e; // 使用 npm 安装
    // var E = window;
    var editor = new E("#editor");
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器
    editor.create();
    editor.txt.html(this.defaultMsg);
  },
  methods: {
    getUEContent() {
      return this.editor.getContent();
    }
  },
  destroyed() {
    this.editor.destroy();
  }
};
</script>

<style lang="less" scoped>
#editor {
  width: 100%;
  height: 500px;
}
</style>
