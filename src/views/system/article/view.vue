<template>
  <div style="text-align:left;">
      <Button style="margin-left: 8px" @click="$router.push('/system/article/list')">返回</Button>

    <div class="formbox">

      <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
          <Input :disabled="true" v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
          <Select :disabled="true" v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="DatePicker">
          <Row>
            <Col span="11">
              <DatePicker
                :disabled="true"
                type="date"
                placeholder="Select date"
                v-model="formItem.date"
              ></DatePicker>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <TimePicker
                :disabled="true"
                type="time"
                placeholder="Select time"
                v-model="formItem.time"
              ></TimePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Radio">
          <RadioGroup :disabled="true" v-model="formItem.radio">
            <Radio :disabled="true" label="male">Male</Radio>
            <Radio :disabled="true" label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox :disabled="true" label="Eat"></Checkbox>
            <Checkbox :disabled="true" label="Sleep"></Checkbox>
            <Checkbox :disabled="true" label="Run"></Checkbox>
            <Checkbox :disabled="true" label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
          <i-switch :disabled="true" v-model="formItem.switch" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
          </i-switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider :disabled="true" v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
          <Input
            :disabled="true"
            v-model="formItem.textarea"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem>
          <Button :disabled="true" type="primary">Submit</Button>
          <Button :disabled="true" style="margin-left: 8px">Cancel</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      }
    };
  }
};
</script>

<style lang="less" scoped>
.formbox {
  width: 400px;
  margin: 0 auto;
}
</style>
