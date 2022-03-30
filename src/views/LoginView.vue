<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/AuthStore";
import { onMounted, ref } from "vue"

const email = ref('')

const authStore = useAuthStore()

authStore.$subscribe(() => {
    if (authStore.isAuthenticated) {
        router.push('/')
    }
})
function signIn() {
    authStore.login(email.value)
}
onMounted(() => {
    if (authStore.isAuthenticated)
        router.push('/')
})
</script>

<template>
    <div class="signin-content text-center">
        <main class="form-signin">
            <form @submit.prevent="signIn">
                <h1 class="h3 mb-3 fw-normal">Welcome to Vue</h1>

                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="emailInput"
                        placeholder="name@example.com"
                        v-model="email"
                    />
                    <label for="floatingInput">Email address</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    </div>
</template>

<style lang="scss">
body {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
}
</style>

<style scoped lang="scss">
.signin-content {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>