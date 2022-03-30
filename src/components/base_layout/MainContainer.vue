<script setup lang="ts">
import Header from "./Header.vue";
import SideBarMenu from "./menu/SideBarMenu.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <Header title="Vue Test App"></Header>
    <main>
        <SideBarMenu></SideBarMenu>
        <div class="container-fluid p-3">
            <RouterView />
        </div>
    </main>
</template>

<style scoped lang="scss">
@import '@/assets/custom.scss';
</style>