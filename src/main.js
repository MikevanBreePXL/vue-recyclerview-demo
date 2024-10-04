import { createApp } from 'vue'
import App from './App.vue'
import RecyclerView from 'vue-recyclerview'

const app = createApp(App)
app.use(RecyclerView)
app.mount('#app')