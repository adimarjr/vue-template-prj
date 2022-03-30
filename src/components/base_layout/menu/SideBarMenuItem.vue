<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { IMenuItem } from '@/models/IMenuItem';

const props = defineProps<{
    menuItem: IMenuItem
}>()
</script>

<template>
    <li class="nav-item">
        <RouterLink
            :to="props.menuItem.route"
            class="nav-link"
            exact-active-class="active"
        >{{ props.menuItem.title }}</RouterLink>
    </li>
</template>
