import {reactive} from "vue"

export const countStore = reactive({
    count:0,
    increment(){
        this.count++
    }
})


/* 
    中央仓库数据，想用的全都在这里

        可以使用pinia来替代，且更好；是vue中状态的中央管理仓库


*/

