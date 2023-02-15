import {defineStore} from "pinia"

export default defineStore("cart",{
    state:()=>{
        return {
            prodLists:[],
            sum:0
        }
    },
    actions:{
        addProdList(prodItem,quantity){
            
            console.log(prodItem)
            let index=this.prodLists.findIndex(item=>{
                return item.product.id===prodItem.id
            })
            if(quantity===0&&index>=-1){
                this.prodLists.splice(index,1)
            }
            if(index>-1){
                this.prodLists[index].quantity+=quantity
            }
            else{
                this.prodLists.push({
                    product:prodItem,
                    quantity:1
                })
            }
        }
    },
    getters:{
        sumPrice(state){
            let num=0
            state.prodLists.forEach(item=>{
                num+=item.product.price * item.quantity
            })
            return num
        }
    }
})