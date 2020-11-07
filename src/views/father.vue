<template>
<div>
  <ul>
    <li v-for="(item,index) in goods" :key=index>
        {{item.text}}
        |
        {{item.price}}
        <button @click="add(item)" >添加购物车</button>
    </li>
  </ul>
  <table border="1" cellpadding="10"  cellspacing="0">
<tr>
    <td>商品</td>
    <td>单价</td>
    <td>价格</td>
    <td>总量</td>
    <td>操作</td>
</tr>
<tr v-for="(c,index) in cart" :key=index >
  <td>{{ c.text   }}</td>
  <td>{{ c.price  }}</td>
  <td>{{ c.price*c.count }}</td>
  <td>{{ c.count}}</td>
  <td>
    <button type="">-</button>
    
    <button type="">+</button>
  </td>
</tr>
  </table>
</div>
</template>

<script>
export default{
  data(){
    return{
      goods:[
        {text:'vue开发',price:'12'},
        {text:'react开发',price:'10'},
        {text:'小程序开发',price:'10'},
      ],
      cart:[],
    }
  },
  methods:{
    add(item){
      let good = this.cart.find( v => v.text === item.text)
      if(good){
        good.count += 1
      }else{
        this.cart.push({...item,count:1})
      }
    }
  }
}
  
</script>
<style scoped>

</style>
