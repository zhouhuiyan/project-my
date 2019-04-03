<template>
  <div style="text-align:left;">
    列表呀
    <router-link to="/system/permissions/add">add</router-link>
    <router-link to="/system/permissions/view">view</router-link>
    <router-link to="/system/permissions/edit">edit</router-link>
      <Button style="margin-left: 8px" @click="$router.push('/system/permissions/add')">添加</Button>

    <Table :columns="columns1" :data="data1">
        <template slot-scope="{ row, index }" slot="action">
            <Button type="info" size="small" style="margin-right: 10px" @click="$router.push('/system/permissions/view')">View</Button>
            <Button type="primary" size="small" style="margin-right: 10px"  @click="$router.push('/system/permissions/edit')">Edit</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
  </div>
</template>

<script>
import {table} from '@/utils/tablecolumns.js';
export default {
  data() {
    return {
      columns1: table,
      data1:[
        {
          name:"zhangsan",
          title:"hahahah",
          age:"12",
          age1:"12"
        },
        {
          name:"zhangsan",
          title:"hahahah",
          age:"12"
        },
        {
          name:"zhangsan",
          title:"hahahah",
          age:"12"
        }
      ]
    };
  },
  methods:{
    remove(){
      /* eslint-disable */
      console.log('删除一个');
    }
  }
};
</script>

<style lang="less" scoped>
Button{
  margin-bottom:5px;
}
</style>
