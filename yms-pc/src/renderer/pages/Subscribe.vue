<!-- 今日预约 -->
<template>
  <div class="subscribe">
    <div class="operator">
      
      <div class="new-add">
        <el-button type="success" @click="addOneSubscribe">新增预约</el-button>
      </div>

      <!-- 用户姓名关键字搜索 -->
      <div class="name-search">
        <el-input placeholder="请输入患者姓名" prefix-icon="el-icon-search" clearable></el-input>
      </div>

      <div class="schedule-time-search">
        <el-date-picker type="date" placeholder="请选择预约时间" prefix-icon="el-icon-date"></el-date-picker>
      </div>
    </div>
    
    <div class="table-data">
       <!-- 预约信息表格 -->
      <el-table
        :data="records"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div>
              <span>病症：</span>
              <span>{{scope.row.description}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="150" header-align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80" header-align="center"></el-table-column>
        <el-table-column prop="phoneNumber" label="手机号" width="200" header-align="center"></el-table-column>
        <el-table-column prop="scheduleTime" label="预约时间" width="180" header-align="center"></el-table-column>
        <el-table-column prop="address" label="住址" width="200" header-align="center"></el-table-column>
        <el-table-column label="操作" header-align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.phoneNumber)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        background
        :page-size="pageModel.pageSize"
        :page-sizes="pageModel.pageSizes"
        :total="pageModel.totalCount"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="changePageSize"
        @current-change="changeCurrentPage"
        @pre-click="preClick"
        @next-click="nextClick">
      </el-pagination>
    </div>
    
    <!-- 添加预约 -->
    <el-dialog title="预约信息" :visible.sync="showAddDialog" size="tiny" top="2%" close-on-click-modal="false">
      <el-form :model="addFormModel" :rules="addRules" label-position="right" status-icon label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="addFormModel.name" placeholder="姓名" clearable></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="addFormModel.phoneNumber" placeholder="电话" clearable></el-input>
        </el-form-item>

        <el-form-item label="预约时间">
          <div class="schedule-time">
            <el-date-picker
              v-model="addFormModel.scheduleDate"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
            <el-time-picker
              v-model="addFormModel.scheduleTime"
              placeholder="请选择时间"
              :picker-options="{
                start: '8:30',
                step: '00:30',
                end: '20:30'
              }">
            </el-time-picker>
          </div>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio-group v-model="addFormModel.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="住址">
          <el-input v-model="addFormModel.address" placeholder="住址" clearable></el-input>
        </el-form-item>

        <el-form-item label="病症">
          <el-input v-model="addFormModel.description" type="textarea" placeholder="请输入病症" :rows="3"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button @click="saveAddForm" type="primary">确定</el-button>
      </div>
      
    </el-dialog>
    
    <!-- 修改预约 -->
    <el-dialog title="预约信息" :visible.sync="showEditDialog" size="tiny" top="2%" close-on-click-modal="false">
      <el-form :model="editFormModel" :rules="addRules" label-position="right">
        <el-form-item label="姓名">
          <el-input v-model="editFormModel.name" clearable></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="editFormModel.phoneNumber" clearable></el-input>
        </el-form-item>

        <el-form-item label="预约时间" class="schedule-time">
          <div class="schedule-time">
            <el-date-picker
              v-model="addFormModel.scheduleDate"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
            <el-time-picker
              v-model="addFormModel.scheduleTime"
              placeholder="请选择时间"
              :picker-options="{
                start: '8:30',
                step: '00:30',
                end: '20:30'
              }">
            </el-time-picker>
          </div>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio-group v-model="editFormModel.sex" size="medium">
            <el-radio-button label="男"></el-radio-button>
            <el-radio-button label="女"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="住址">
          <el-input v-model="editFormModel.address" clearable></el-input>
        </el-form-item>

        <el-form-item label="病症">
          <el-input v-model="editFormModel.description" type="textarea" :rows="3" clearable></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button @click="saveEditForm" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const mockData = require('../mockData').mockData
const { pageConfig, operatorType } = require('../common/config')

export default {
  name: 'SubscribePage',
  components: {

  },
  data () {
    return {
      records: [],
      showAddDialog: false,
      showEditDialog: false,
      addFormModel: null,
      editFormModel: null,
      addRules: {},
      pageModel: {
        currentPage: 1,
        pageSize: pageConfig.pageSize, // 分页大小
        pageSizes: pageConfig.pageSizes, // 分页组合
        totalCount: 100
      },
      operatorTableIndex: 0 // 操作表格数据的下标
    }
  },

  created () {
    this.initAddFormModel()
    this.loadSubscribeInfos()
  },

  methods: {
    // 获取预约信息, 按时间逆序输出显示.
    loadSubscribeInfos () {
      // 分页查询.
      const begin = (this.pageModel.currentPage - 1) * this.pageModel.pageSize
      const end = begin + this.pageModel.pageSize
      this.records = mockData.scheduleRecords.slice(begin, end)
      this.records.sort((a, b) => a.scheduleTime > b.scheduleTime)
    },

    // 编辑用户预约信息.
    handleEdit (index, value) {
      console.log(value)
      this.operatorTableIndex = index
      this.showAddDialog = true
    },

    // 删除用户预约信息.
    handleDelete (index, userPhone) {
      this.records.splice(index, 1)
      this.showSuccess(operatorType.DELETE)
    },

    // 初始化新增弹框信息.
    initAddFormModel () {
      this.addFormModel = {
        name: '',
        phoneNumber: '',
        sex: '男',
        scheduleDate: '',
        scheduleTime: '',
        address: '',
        description: ''
      }

      this.editFormModel = {
        name: '',
        phoneNumber: '',
        sex: '男',
        scheduleDate: '',
        scheduleTime: '',
        address: '',
        description: ''
      }
    },

    // Handles the add subscribe.
    addOneSubscribe () {
      this.showAddDialog = true
    },

    // Saves add information.
    saveAddForm () {
      console.log(this.addFormModel)
      this.records.push(this.addFormModel)
      this.records.sort((a, b) => a.scheduleTime > b.scheduleTime)
      this.showAddDialog = false
      this.showSuccess(operatorType.ADD)
    },

    // Saves edit information.
    saveEditForm () {
      console.log(this.editFormModel)
      this.records.splice(this.operatorTableIndex, 1, this.editFormModel)
      this.showEditDialog = false
      this.showSuccess(operatorType.UPDATE)
    },

    // 分页
    changePageSize (pageSize) {
      console.log(pageSize)
      this.pageModel.pageSize = pageSize
    },
    changeCurrentPage (currentPage) {
      console.log(currentPage)
      this.pageModel.currentPage = currentPage
    },
    preClick (prePage) {
      console.log(prePage)
      this.pageModel.currentPage = prePage
    },
    nextClick (nextPage) {
      console.log(nextPage)
      this.pageModel.currentPage = nextPage
    }
  }
}
</script>

<style lang="stylus" scoped>
  .subscribe
    width -webkit-fill-available
    .operator
      float right
      width 100%
      .name-search
        float left
        margin 0px 0px 2% 2%
      .schedule-time-search
        float left
        margin 0px 0px 2% 20%
      .new-add
        float right
    .table-data
      text-align center
    .el-dialog
      margin-top 20px !important
      .el-form
        padding-left 10%
        .el-form-item
          .schedule-time
            display flex
          .el-input
          .el-textarea
            width 55%
            margin-left 5%
          .el-radio-group
            margin-left 5%
</style>


