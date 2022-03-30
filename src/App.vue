<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/AuthStore';

const authStore = useAuthStore()
authStore.recover()
</script>

<template>
  <div class="container-fluid p-0 h-100">
    <RouterView />
  </div>
</template>
