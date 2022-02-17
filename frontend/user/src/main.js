import { createApp } from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 使用 muse-ant-vue覆盖 antd 样式
import "../../muse-ant-vue/app.scss";

import router from "./plugins/router";

const app = createApp(App);

app.use(Antd);
app.use(router);

app.mount("#app");
