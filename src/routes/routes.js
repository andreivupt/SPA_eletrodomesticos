import { createRouter , createWebHistory } from 'vue-router'

import HomeProducts from "@/components/HomeProducts";
import EditProduct from "@/components/EditProduct";
import CreateProduct from "@/components/CreateProduct";

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeProducts
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
