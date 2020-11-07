<template>
   <div>
       姓名:<input type="text" v-model="form.name"><br/>
       年龄：<input type="text" v-model="form.age"><br/>
       存款：<input type="text" v-model="form.monney"><br/>
   </div>
</template>
<script>
  export default{
    data(){
      return{
        form:{
            name:'',
            age:null,
            monney:null,
        }

      }
    },
    methods:{
      chuanshuju(){
         this.$bus.$emit('anhao',this.form)
      }
    }
  }
</script>
<style  lang='less'>
.meun{
  display: flex;
  width: 500px;
  justify-content: space-between;
  li{
  list-style: none;
  width:50px;
  height: 30px;
  line-height: 30px;
  border:1px solid #000;
  border-radius: 5px;
  position: relative;
}
.line{
width: 53px;
    height: 5px;
    background-color: dodgerblue;
    position: absolute;
    top: 342px;
}
.yanse{
  background-color: green;
}
}

</style>