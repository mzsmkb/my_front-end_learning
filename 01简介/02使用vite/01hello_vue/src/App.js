//引入子组件
import MyButton from "./MyButton"

//创建一个根组件
export default {
    data(){
        return {
            msg:"vue还挺有意思的！",
             count:0
        }
    },
    //在组件中注册子组件
    components:{
        "my-button":MyButton
    },

    /**
     *  template是用字符串的形式在编写模板
     *   1\这些字符串会在项目运行时，在浏览器中被编译成js的函数（性能不太好）
     *      2、在字符串中编写代码，体验很差
     *  
     *  为了解决这个问题，Vue为我们提供了一种单文件组件（SFC）
     *      - 单文件组件的格式为vue
     *      - vue文件用来编写单文件组件，vue文件本身并不能被浏览器所识别
     *          所以它必须要被构建工具打包后，才能使用
     *      - 同时vue文件在打包时，构建工具会直接将template装换位函数
     *          无需在浏览器中再去编译，这样一来性能也会有所提升
     */
    template:`
    <h1>{{msg}}</h1>
    <my-button> </my-button> <br/>
    <my-button> </my-button> <br/>
    <my-button> </my-button> 
    `
}