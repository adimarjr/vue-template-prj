import type { IMenuItem } from "@/models/IMenuItem";
import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: () => (
        {
            items: [
                <IMenuItem>{
                    route: '/',
                    title: 'Home'
                },
                <IMenuItem>{
                    route: '/dashboard',
                    title: 'Dashboard'
                }
            ]
        }
    )
})