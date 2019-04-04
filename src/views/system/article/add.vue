<template>
  <div class="formbox">
    <Form :model="formItem" :label-width="80">
      <FormItem label="Input">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup v-model="formItem.radio">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">On</span>
          <span slot="close">Off</span>
        </i-switch>
      </FormItem>
      <FormItem label="Slider">
        <Slider v-model="formItem.slider" range></Slider>
      </FormItem>
      <FormItem label="Text">
        <Input
          v-model="formItem.textarea"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
      <FormItem>
        <Ueditor :defaultMsg="'这是测试'"></Ueditor>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px" @click="$router.push('/system/article/list')">Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Ueditor from "@/components/ueditor/index";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
export default {
  components: {
    Ueditor,
    quillEditor
  },
  data() {
    return {
      editorOption: {},
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      },
      content: ""
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady() {},
    onSubmit() {
      //提交
      //this.$refs.infoForm.validate，这是表单验证
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          this.$post("m/add/about/us", this.infoForm).then(res => {
            if (res.errCode == 200) {
              this.$message({
                message: res.errMsg,
                type: "success"
              });
              this.$router.push("/aboutus/aboutlist");
            } else {
              this.$message({
                message: res.errMsg,
                type: "error"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.formbox {
  width: 400px;
  margin: 0 auto;
}
</style>
