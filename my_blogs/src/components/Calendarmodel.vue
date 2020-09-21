<template>
  <div id="Calendarmodel">
    <el-calendar v-model="value">
    </el-calendar>
  </div>

</template>

<script>
  export default {
    name: "Calendarmodel",
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  #Calendarmodel{
    height: 10px;
    width: 350px;
  }
  el-cascader{
    height: 200px;
  }
  /*.el-calendar{*/
  /*  max-height: 10px;*/
  /*}*/
</style>
