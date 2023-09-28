import { defineStore } from "pinia";

export const useStudentStore = defineStore("student",{
    state:()=>({
        name:"孙悟空",
        age:18,
        gender:"男",
        address:"花果山",
        skills:["七十二变","筋斗云","金箍棒"]
    }),

    // 计算属性
    getters:{
        // 箭头函数
        title:(state) =>{
            return "Mr." + state.name
        },
        double(){
            return this.age*2
        }
    },

    //方法，
    actions:{
        // 普通函数
        growUp(){
            this.age++
        }
    }
})




