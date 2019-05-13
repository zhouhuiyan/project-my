<template>
  <div style="text-align:left;">
    <div style="margin:20px;"></div>
    <Table :columns="reviewcolumns" :data="review" :height="470">
      <template
        slot-scope="{row}"
        slot="createtime"
      >{{$dayjs(row.createtime*1000).format("YYYY-MM-DD HH:mm:ss")}}</template>
      <template slot-scope="{ row }" slot="state">{{row.state == 0 ? '正常' : '封禁'}}</template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="info"
          size="small"
          style="margin-right: 10px"
          @click="$router.push({path:'/system/review/view',query: {id: row.id}})"
        >查看</Button>
        <Button
          style="margin-right: 10px"
          :disabled="row.state == 0 "
          type="success"
          size="small"
          @click="editState(0,row.id)"
        >恢复</Button>
        <Button type="error" size="small" :disabled="row.state == 1" @click="editState(1,row.id)">封禁</Button>
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
import { review } from "@/utils/tablecolumns.js";
import { getReviewList, updateState } from "@/utils/api.js";
export default {
  data() {
    return {
      reviewcolumns: review,
      review: [
        {
          id: "zhangsan",
          critics: "7888",
          // art_id: "hahahah",
          title: "12",
          content: "12",
          createtime: 123456787654,
          state: 0
        }
      ],
      offset: 1,
      page_size: 10,
      count: 100,
      state: 0,
      id: 1
    };
  },
  methods: {
    remove() {
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
      getReviewList(params).then(res => {
        console.log("评论列表：", res);
        this.review = res.data.datalist.reviewlist;
        this.count = res.data.datalist.count;
      });
    },
    editState(state, id) {
      var params = {
        state: state,
        id: id
      };
      updateState(params).then(res => {
        console.log("得到的结果：", res);
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
