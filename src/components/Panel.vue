<template>
  <div class="hello">
    <el-row>
      <el-col :span="14" :offset=5 class="panelTitleButton">
        <el-button-group>
          <el-button :plain="true">实时数据</el-button>
          <el-button :plain="true" class="panelButtonLeft">历史数据</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row class="row-bg">
      <el-col :span="18" :offset="5">
        <el-card class="box-card">
          <div>舰船情况</div>
            <img v-for="(o, index) in 2" src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .panelTitleButton {
    padding-top: 7%;
  }

  .row-bg {
    padding: 10px 0;
  }

  .box-card {
    /*width: 480px;*/
    box-shadow: none;
    border-radius: 1px;
    background: #fdfdfd;
  }
</style>
