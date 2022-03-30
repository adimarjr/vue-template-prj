<script setup lang="ts">
import { useMenuStore } from "@/stores/MenuStore";
import SideBarMenuItem from "./SideBarMenuItem.vue";

const menuStore = useMenuStore()

const logoutItem = {
    route: '/logout',
    title: 'Logout'
}
</script>

<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light menu">
        <ul class="nav nav-pills flex-column mb-auto">
            <SideBarMenuItem
                v-for="item in menuStore.items"
                :menu-item="item"
            ></SideBarMenuItem>
        </ul>
        <ul class="nav nav-pills">
            <SideBarMenuItem
                class="end"
                :menu-item="logoutItem"
            ></SideBarMenuItem>
        </ul>
    </div>
</template>

<style scoped>
.menu {
    width: 250px;
}
</style>