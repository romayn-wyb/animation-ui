import { createApp } from "vue";
import App from './src/app.vue'
import WButton from  '@wang-ui/components/button'
const app=createApp(App);
console.log(WButton)
app.use(WButton);
app.mount("#root")