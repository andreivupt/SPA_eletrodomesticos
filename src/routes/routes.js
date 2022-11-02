import { createRouter , createWebHistory } from 'vue-router'

import HomeProducts from "@/components/HomeProducts";
import EditProduct from "@/components/EditProduct";
import CreateProduct from "@/components/CreateProduct";
import ListBrands from "@/components/ListBrands";

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
    {
        name: 'brands',
        path: '/brands',
        component: ListBrands
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
