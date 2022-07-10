import { createApp } from 'vue'
import App from './components/App.vue'
import routes from './routes'
import './styles/style.sass'
import './styles/button.sass'

createApp(App).use(routes).mount('#app')
