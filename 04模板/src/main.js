import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//想想全局属性是不是真的有必要
// app.config.globalProperties.hello = "您好，这是全局的属性!"
// app.config.globalProperties.alert = alert.bind(this)

app.mount('#app')
