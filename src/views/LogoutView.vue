<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/AuthStore";
import { onMounted } from "vue"

const authStore = useAuthStore()

authStore.$subscribe(() => {
    if (!authStore.isAuthenticated) {
        router.push('Login')
    }
})
onMounted(() => {
    authStore.logout()
})
</script>

<template>
    <div class="d-flex justify-content-center">
        <h1>Logout...</h1>
    </div>
</template>