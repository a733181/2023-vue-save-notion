<template>
  <div class="flex min-h-[100vh] items-center justify-center">
    <form @submit.prevent="submitHandler">
      <h1 class="mb-6 text-center text-4xl font-bold text-blue-500">Token</h1>
      <Input
        class="mb-4 w-full"
        classInput="w-full p-2"
        v-model="token"
      ></Input>
      <Button
        text="確定"
        class="btn mx-auto block bg-teal-700 text-white"
        :loading="isLoading"
        :disabled="isLoading"
        type="submit"
      ></Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

import useAuthStore from '@/stores/auth/auth';
const authStore = useAuthStore();
const { loginHandler } = authStore;

const token = ref('');
const isLoading = ref(false);

async function submitHandler() {
  isLoading.value = true;
  await loginHandler({
    token: token.value,
  });
  isLoading.value = false;
}
</script>
