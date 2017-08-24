<template>
  <div class="nav">
    <el-col :span="4" class="NavCol">
      <el-menu :router=true default-active="1" class="el-menu-demo NavMenu" theme="dark" >
        <h3 class="NavTitle">BIG SHIP</h3>

        <el-menu-item index="1" :route="{path:'/'}"><i class="el-icon-menu"></i>监控面板</el-menu-item>
        <el-menu-item index="2" :route="{path:'/stationManage'}"><i class="el-icon-setting"></i>基站管理</el-menu-item>
        <el-menu-item index="3" :route="{path:'/labelManage'}"><i class="el-icon-setting"></i>标签管理</el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    beforeCreate () {
      if (!JSON.parse(localStorage.getItem('user'))) { this.$router.push('/login') }
    }
  }
</script>

<style>

  .NavTitle{
    color: white;
    font-weight: 500;
    padding-left: 20px;
    padding-bottom: 5px;
  }

  .NavCol{
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 100;
  }

  .NavMenu{
    height: 100%;
    text-align: left;
  }
</style>
