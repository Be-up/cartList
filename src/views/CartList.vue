<script setup>
import {ref,watch,computed} from 'vue'
import useCartStore from "../store/cart.js"

const store=useCartStore()
console.log(store.prodLists)


</script>

<template>
  <div class="cart" v-if="store.prodLists.length>0">{{ store.prodLists.length }}
    <div class="item" v-for="item in store.prodLists" :key="item.id">
        <img :src="item.product.images" alt="">
        <div>
            <div>{{item.product.name}}</div>
            <div>{{item.product.describle}}</div>
            <div><button :disabled="item.quantity===0 ? true : false" @click="store.addProdList(item.product,-1)">-</button><span>{{ item.quantity }}</span><button @click="store.addProdList(item.product,1)">+</button></div>
        </div>
        <button style="background-color:pink" @click="store.addProdList(item.product,0)">删除</button>
    </div>
    <p>----------------</p>
    <h1>{{ store.sumPrice }}</h1>
  </div>
</template>

<style scoped lang="less">
    .cart{
        position:fixed;
        top: 100px;
        left: 100px;
        .item{
            display: flex;
            img{
                width: 100px;
                height: 100px;
            }
        }
    }
</style>