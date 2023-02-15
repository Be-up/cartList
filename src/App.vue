<script setup>
import {ref,watch,computed} from "vue"
import ProductList from "./views/ProductList.vue";
import CartList from "./views/CartList.vue";
import useMainStore from "./store/index.js"

const store=useMainStore()




</script>

<template>
    <!-- <div> -->
      <product-list></product-list>
      <cart-list></cart-list>
    <!-- </div> -->
</template>

<style scoped lang="less">

</style>
