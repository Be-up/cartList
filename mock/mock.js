import Mock from "mockjs"

const products=Mock.mock({
    "data|5":[
        {
            "id|+100":100,
            "group_id":"123-666",
            "name":"@pick(['唱','跳','rap','篮球','music'])",
            "price":"@pick([20,30,10,40,50])",
            "describle":"@csentence(10)",
            "update_time":"@time",
            "images":"@image('200x200','#ffe368')"
        }
    ]
})

// console.log(products)

export default products