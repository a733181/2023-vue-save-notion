<template>
  <div class="flex w-28 flex-col border-r border-gray-500 pt-20 text-center">
    <h1 class="mb-6 text-lg">歡迎</h1>
    <ul class="mx-2">
      <li
        v-for="item in menu"
        :key="item.name"
        class="mb-8 border-b pb-1 hover:opacity-50"
        :class="
          route.path === item.path
            ? 'border-green-800 text-green-800'
            : 'border-gray-300 text-gray-300'
        "
      >
        <RouterLink :to="item.path">{{ item.name }}</RouterLink>
      </li>
    </ul>
    <Button
      text="登出"
      class="btn mx-6 mb-5 mt-auto bg-gray-200"
      @click="logoutHandler"
    ></Button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import Button from '@/components/ui/Button.vue';

import useAuthStore from '@/stores/auth/auth';

const authStore = useAuthStore();
const { logoutHandler } = authStore;

const route = useRoute();

const menu = [
  {
    name: 'udemy',
    path: '/console/udemy',
  },
  {
    name: 'youtubelist',
    path: '/console/youtubelist',
  },
];
</script>
