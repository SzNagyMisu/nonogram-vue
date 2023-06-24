import { createRouter, createWebHashHistory } from 'vue-router';

import Create from './views/Create.vue';

const routes = [
    {
        name: "home",
        path: "/",
        component: { template: "<div>Hello</div>" }, // TODO
    },
    {
        name: "create",
        path: "/create",
        component: Create,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
