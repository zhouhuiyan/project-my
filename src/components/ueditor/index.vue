<template>
  <div style="position:relative">
    <script id="editor" type="text/plain" style="width:524px;height:500px;"></script>
  </div>
</template>

<script>
import "../../../public/ueditor/ueditor.config.js";
import "../../../public/ueditor/ueditor.all.js";
import "../../../public/ueditor/lang/zh-cn/zh-cn.js";
import "../../../public/ueditor/ueditor.parse.js";

export default {
  /**
   在需要引入的组件中使用ue组件
    <UEtor :defaultMsg=defaultMsg :config=config ref="ue"></UEtor>
    defaultMsg: '这 里是UE测试,
    config: {
    IinitialFrameWidth: 1200,
    initialFrameHeight: 350
    }
   */
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object,
      default: () => {
        return {
          IinitialFrameWidth: 300,
          initialFrameHeight: 350
        };
      }
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    const _this = this;
    _this.editor = UE.getEditor("editor", _this.config);
    this.editor.addListener("ready", function() {
      _this.editor.setContent(_this.defaultMsg);
    });
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
