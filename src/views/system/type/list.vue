<template>
  <div style="text-align:left;">
      <Button style="margin-left: 8px" @click="$router.push('/system/type/add')">添加</Button>

    <Table :columns="columns1" :data="data">
      <template slot-scope="{ row }" slot="status">{{row.status == 0 ? '正常' : '删除'}}</template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="info" size="small" style="margin-right: 10px" @click="$router.push({path:'/system/type/view',query:{id:row.id}})">查看</Button>
            <Button type="primary" size="small" style="margin-right: 10px"  @click="$router.push({path:'/system/type/edit',query:{id:row.id}})">修改</Button>
            <Button type="error" :disabled="row.status == 1" size="small" @click="editState(row.id)">删除</Button>
        </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page
          :total="count"
          :current="offset"
          :page-size="page_size"
          simple
          show-total
          @on-change="changePage"
        ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import {type} from '@/utils/tablecolumns.js';
import { getType,delType } from "@/utils/api.js";

export default {
  data() {
    return {
      columns1: type,
      data:[
        {
          id:"zhangsan",
          name:"hahahah",
          status:"12",
        },
      ],
      offset: 1,
      page_size: 10,
      count: 100
    };
  },
  methods:{
    remove(){
      /* eslint-disable */
      console.log('删除一个');
    },
    changePage(val) {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      console.log("this is value:", val);
      this.offset = val;
      this.getlist();
    },
    getList() {
      var params = {
        offset: this.offset,
        page_size: this.page_size
      };
      getType(params).then(res => {
        console.log("wenzhang lie biao:",res);
        this.data = res.data.datalist.typelist;
        this.count = res.data.datalist.count;
      });
    },
     editState(id) {
        console.log("wenzhang lie birrrrrrao:");

      var params = {
        id: id
      };
      delType(params).then(res => {
        console.log("得到的结果：", res);
        this.getList();
      });
    }
  },
  created(){
    this.getList();
  }
};
</script>

<style lang="less" scoped>
Button{
  margin-bottom:5px;
}
</style>
