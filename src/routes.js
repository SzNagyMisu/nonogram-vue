import { createRouter, createWebHashHistory } from 'vue-router';

import Welcome from './views/Welcome.vue';
import Create from './views/Create.vue';
import Solve from './views/Solve.vue';

const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
    },
    {
        name: "create",
        path: "/create",
        component: Create,
    },
    {
        name: "solve",
        path: "/solve",
        component: Solve,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
