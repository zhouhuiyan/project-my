<template>
  <div id="editor">
        <h1>欢迎</h1>
            <p>22222222222</p>
    </div>
</template>

<script>
import "../../../public/wangEditor-3.1.1/release/wangEditor.min.js";
export default {
  props: {
    defaultMsg: {
      type: String
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    var E = window.wangEditor;
        var editor = new E('#editor');
         editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器
        editor.create();
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
</style>
