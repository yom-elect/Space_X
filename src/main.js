import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

import AuthHandler from "./component/AuthHandler";
import ImageList from './component/ImageList';
import UploadForm from './component/UploadForm';

const routes = [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    {
        path: "/oauth2/callback",
        component: AuthHandler
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');