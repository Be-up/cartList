<script setup>
import {ref,watch,computed,onMounted,getCurrentInstance,reactive} from 'vue'
import useCartStore from "../store/cart.js"

const store=useCartStore()


let data=reactive([])
const {proxy:{$prods:{data:abc}}}=getCurrentInstance()
  data=abc
  console.log(data)
/* onMounted(()=>{
  const {proxy:{$prods:{data:abc}}}=getCurrentInstance()
  data=abc
  console.log(data)

  }) */

</script>

<template>
<div>
    <div class="product" v-for="(item,index) in data" :key="index">
        <div class="image">
            <img :src="item.images" alt="">
        </div>
        <div>
            <div>{{ item.name }}</div>
            <div>{{ item.describle }}</div>
            <div>{{ item.price }}</div>
            <div><button @click="store.addProdList(item,1)">添加到购物车</button></div>

        </div>
    </div>

</div>
</template>

<style scoped lang="less">
    .product{
        display: flex;
        
        // flex-flow: column wrap;
        .image{
            width: 100px;
            height: 100px;
            box-sizing: border-box;
            border-right: 1px solid red;
            border-top: 1px solid red;
            padding-bottom: 2px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>