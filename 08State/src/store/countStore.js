/* 
    使用这个可以在浏览器调试工具中看到这些数据
*/

//引入函数defineStore
import {defineStore} from "pinia";
import { computed, ref } from "vue";

// 通过函数来创建store   
// defineStore("store的id"，配置对象)
// 配置对象：state，是一个函数，将需要由pinia维护的数据以对象的形式返回

// 选项式api
export const useCountStore = defineStore("count",{
    //数据 就像vue中的data
    state:()=>({
        count:100
    }),

    //计算属性
    getters:{
        double:(state) => state.count*2
    },

    // 方法
    actions:{
        increment(){
            this.count++
        }
    }
})


// 组合式api
// export const useCountStore =defineStore("count",()=>{
//     const count=ref(50)
//     const double=computed(()=> count.value*2)
//     function increment(){
//         count.value++
//     }

//     return {count,double,increment}
// })


