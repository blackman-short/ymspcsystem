<template>
  <div class="login-page">
    <div class="login-form">
      <el-from :model="loginForm">
        <el-form-item label="用户名">
          <el-input placeholder="请输入手机号" v-model="loginForm.phoneNumber" clearable></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="loginForm.password" type="password" clearable></el-input>
        </el-form-item>
      </el-from>

      <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
          <el-button type="info" plain @click="onReset">重置</el-button>
      </el-form-item>
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
        this.router.push('/home')
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
  }
}
</script>

<style lang="stylus" scoped>
  .login-page
    width -webkit-fill-available
    height -webkit-fill-available
    background-image url('../assets/yellow.jpg')
    display flex
    .login-form
      z-index 20
      border 1px solid #fff
      justify-content center
      background-color #000
      .el-form
      .el-form-item
        margin 5% 5% 5% 5%
</style>
