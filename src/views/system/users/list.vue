<template>
  <div style="text-align:left;">
    <div style="margin:20px;"></div>
      <Button style="margin-left: 8px" @click="$router.push('/system/users/add')">添加</Button>
    <Table :columns="columns" :data="data" :height="470">
      <template slot-scope="{ row }" slot="status">{{row.status == 0 ? '正常' : '删除'}}</template>
      <template
        slot-scope="{row}"
        slot="createtime"
      >{{$dayjs(row.createtime*1000).format("YYYY-MM-DD HH:mm:ss")}}</template>
      <template slot-scope="{ row }" slot="action">
        <Button
          type="info"
          size="small"
          style="margin-right: 10px"
          @click="$router.push({path:'/system/users/view',query: {id: row.id}})"
        >查看</Button>
        <Button
          style="margin-right: 10px"
          type="success"
          size="small"
          @click="$router.push({path:'/system/users/edit',query: {id: row.id}})"
        >修改</Button>
        <Button type="error" size="small" :disabled="row.status == 1" @click="editState(1,row.id)">删除</Button>
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
import { users } from "@/utils/tablecolumns.js";
import { getUserList, userState } from "@/utils/api.js";
export default {
  data() {
    return {
      columns: users,
      data: [
        {
          id: "zhangsan",
          account: "7888",
          nickname: "hahahah",
          role: "12",
          createtime: 123456787654,
          state: 0
        }
      ],
      offset: 1,
      page_size: 10,
      count: 100,
    };
  },
  methods: {
    edit() {
      /* eslint-disable */
      console.log("删除一个");
      this.editState(state, id);
    },
    changePage(val) {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      console.log("this is value:", val);
      this.offset = val;
      this.getlist();
    },
    getlist() {
      var params = {
        offset: this.offset,
        page_size: this.page_size
      };
      getUserList(params).then(res => {
        this.data = res.data.datalist.reviewlist;
        this.count = res.data.datalist.count;
      });
    },
    editState(status, id) {
      var params = {
        status: status,
        id: id
      };
      userState(params).then(res => {
        this.getlist();
      });
    }
  },
  created() {
    this.getlist();
  }
};
</script>

<style lang="less" scoped>
button {
  margin-bottom: 5px;
}
</style>
