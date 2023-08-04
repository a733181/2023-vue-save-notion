<template>
  <div class="flex min-h-[100vh]">
    <startMenu />
    <div class="grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import startMenu from '@/components/layout/StartMenu.vue';
</script>
