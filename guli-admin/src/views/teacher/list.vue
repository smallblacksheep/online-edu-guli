<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="讲师姓名"
        width="180"/>
      <el-table-column
        prop="level"
        label="头衔"
        width="180"/>
      <el-table-column
        prop="joinDate"
        label="入驻时间"/>
    </el-table>
  </div>
</template>
