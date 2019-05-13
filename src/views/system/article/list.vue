<template>
  <div style="text-align:left;">
    <Button style="margin-left: 8px" @click="$router.push('/system/article/add')">添加</Button>
    <Table :columns="columns1" :data="data">
      <template
        slot-scope="{row}"
        slot="content"
      >{{row.content.length >= 30 ? row.content.slice(1,30)+'...' : row.content}}</template>
      <template
        slot-scope="{row}"
        slot="createtime"
      >{{$dayjs(row.createtime*1000).format("YYYY-MM-DD HH:mm:ss")}}</template>
      <template slot-scope="{ row }" slot="status">{{row.status == 0 ? '正常' : '删除'}}</template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="info"
          size="small"
          style="margin-right: 10px"
          @click="$router.push({path:'/system/article/view',query:{id:row.id}})"
        >查看</Button>
        <Button
          type="primary"
          size="small"
          style="margin-right: 10px"
          @click="$router.push({path:'/system/article/edit',query:{id:row.id}})"
        >修改</Button>
        <Button :disabled="row.status == 1" type="error" size="small" @click="editState(row.id)">删除</Button>
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
import { article } from "@/utils/tablecolumns.js";
import { getArtList, delArt } from "@/utils/api.js";
export default {
  data() {
    return {
      columns1: article,
      data: [
        {
          id: 1,
          title: "hdhd",
          author: "dkjfi",
          content: "dhfkd",
          createtime: "dkjfdoj",
          status: 0
        }
      ],
      offset: 1,
      page_size: 10,
      count: 100
    };
  },
  methods: {
    getList() {
      var params = {
        offset: this.offset,
        page_size: this.page_size
      };
      getArtList(params).then(res => {
        this.data = res.data.datalist.artlist;
        this.count = res.data.datalist.count;
      });
    },
    changePage(val) {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.offset = val;
      this.getList();
    },
    editState(id) {
      var params = {
        id: id
      };
      delArt(params).then(res => {
        if (res.data.datalist) {
          this.$Message.success("请求成功");
          this.getList();
        } else {
          this.$Message.success("请求失败");
        }
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
button {
  margin-bottom: 5px;
}
</style>
