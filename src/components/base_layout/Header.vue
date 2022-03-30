<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';

defineProps<{
    title: string
}>()

const authStore = useAuthStore()
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark stiky-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{ title }}</a>
                <div class="text-light">
                    {{authStore.user.name}}
                </div>
            </div>
        </nav>
    </header>
</template>