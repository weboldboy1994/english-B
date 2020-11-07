<template>
  <div class="about">
      <div>姓名:{{ shou.name}}</div>
      <div>年龄:{{ shou.age}}</div>
      <div>金钱:{{ shou.monney}}</div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
              shou:{
                  name:'zzh',
                  age:18,
                  monney:9999999999
              },
            }
        },
        methods:{
            init(){
                this.$bus.$on('anhao',function (data) {
                    debugger
                        this.shou = data
                }).bind(this)
            }
        },
        created(){
            this.init()
        }
    }
</script>
