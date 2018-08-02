<template>
  <div class="login-page">
    <div class="login-form">
      <el-form :model="loginForm" label-position="left" label-width="80px">
        <el-form-item label="账号">
          <el-input placeholder="请输入手机号" v-model="loginForm.phoneNumber" clearable class="input-content"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="loginForm.password" type="password" clearable class="input-content"></el-input>
        </el-form-item>

        
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
          <el-button type="info" plain @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: null
    }
  },
  methods: {
    // 用户登录
    onLogin () {
      console.log(this.loginForm)
      const phoneNumber = this.loginForm.phoneNumber
      const password = this.loginForm.password

      if (phoneNumber === '123' && password === '123') {
        this.$router.push('/home')
      } else {
        this.$message({
          type: 'error',
          message: '用户名或密码错误! 请重新登录。。。'
        })
      }
    },

    // 重置
    onReset () {
      this.initLoginForm()
    },

    initLoginForm () {
      this.loginForm = {
        phoneNumber: '',
        password: ''
      }
    }
  },
  created () {
    this.initLoginForm()
  }
}
</script>

<style lang="stylus" scoped>
  .login-page
    width -webkit-fill-available
    height -webkit-fill-available
    background-image url('../assets/small-y.jpg')
    background-repeat no-repeat
    background-size cover
    z-index -1
    display flex
    .login-form
      border 2px solid #fff
      border-radius 25px
      background-color #DCDFE6
      width 45%
      height 250px
      margin 10% 0 0 23%
      opacity 0.95
      .el-form
      .el-form-item
        margin 6% 0 0 15%
        .input-content
          width 60%
</style>
