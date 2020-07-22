<template>
  <div class="app-container">
    <el-table
      :data="list"
      stripe
      border
      style="width: 100%">
      <el-table-column
        label="#"
        width="50">
        <template slot-scope="scope">
          {{ (currentPage-1)*pageSize + scope.$index +1 }}
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="讲师姓名"
        width="180"/>
      <el-table-column
        prop="level"
        label="头衔"
        width="180">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.level === 1" type="success" size="mini">高级讲师</el-tag>
          <el-tag v-if="scope.row.level === 2" size="mini">首席讲师</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="80"
        sortable />
      <el-table-column
        prop="joinDate"
        label="入驻时间"
        width="180"/>
      <el-table-column
        prop="intro"
        label="简介" />
      <el-table-column label="操作" width="240">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="pageSize"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>
<script>
import teacherApi from '@/api/teacher'
export default {
  data() {
    return {
      list: [],
      total: 0,
      currentPage: 1,
      pageSize: 5,
      teacherQuery: {}
    }
  },

  // 页面渲染成功后
  created() {
    this.pageList()
  },
  // 获取教师列表数据
  methods: {
    getTeacherList() {
      teacherApi.getTeacherList().then(Response => {
        this.list = Response.data.items
        // this.total = Response.data.total
      })
    },
    pageList() {
      teacherApi.pageList(this.currentPage, this.pageSize, this.teacherQuery).then(Response => {
        this.list = Response.data.teacherPage.records
        this.total = Response.data.teacherPage.total
      })
    },
    handleDelete(id) {

    },
    handleEdit() {

    },
    handleSizeChange(size) {
      this.pageSize = size
      this.pageList(this.currentPage, this.pageSize, this.teacherQuery)
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.pageList(this.currentPage, this.pageSize, this.teacherQuery)
    }
  }
}
</script>
