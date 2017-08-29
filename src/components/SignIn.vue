<template>
  <div class="signIn">
    <h3>{{ msg }}</h3>

    <div class="SignInInput">
      <el-input placeholder="用户名" v-model="username" size="large" >
      </el-input>
    </div>

    <div class="SignInInput ">
      <el-input placeholder="密码" type="password" v-model="password" size="large">
      </el-input>
    </div>

    <div class="SignInInput">
      <el-button type="primary" @click="login" class="SignInButton" size="large">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
    data () {
      return {
        msg: 'BIG SHIP管理后台',
        username: '',
        password: ''
      }
    },
    methods: {
      login: function (event) {
        if (this.username === '123' && this.password === '123') { alert(this.username); localStorage.setItem('user', JSON.stringify({'username': this.username, 'password': this.password})); this.$router.push('/') } else { alert('错误') }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-weight: 300;
    font-size: 200%;
  }

  .SignInInput {
    width: 30%;
    padding-top: 30px;
    margin: auto;
  }

  .SignInButton {
    width: 100%;
  }

  .signIn {
    position: fixed;
    top: 25%;
    width: 100%;
    font-weight: 500;
    text-align: center;
  }
  el-input {
    height: 50px !important;
  }


</style>
