<template>
  <div class="nav">
    <el-col :span="4" class="NavCol">
      <el-menu router="true" default-active="1" class="el-menu-demo NavMenu" theme="dark" >
        <h5 style="color: white">BIG SHIP</h5>

        <el-menu-item index="1" route="/"><i class="el-icon-menu"></i>监控面板</el-menu-item>
        <el-menu-item index="2" route="/stationManage"><i class="el-icon-setting"></i>基站管理</el-menu-item>
        <el-menu-item index="3" route="/labelManage"><i class="el-icon-setting"></i>标签管理</el-menu-item>
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

  .NavCol{
    position: fixed;
    height: 100%;
    top: 0;
  }

  .NavMenu{
    height: 100%;
    text-align: left;
  }
</style>
