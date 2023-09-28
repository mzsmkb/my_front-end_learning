//子组件

export default {
    data(){
        return {
            count:0
        }
    },

    template:"<button @click='count++'>点我</button>你点了{{count}}次"
}