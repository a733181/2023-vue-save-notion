<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="{ 'cursor-not-allowed': props.disabled }"
  >
    <Loading v-if="props.loading" class="mr-2 inline h-5 w-5 fill-white" />
    {{ text }}
    <slot></slot>
  </button>
</template>

<script setup>
import Loading from '@/components/ui/Loading.vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="postcss">
.btn {
  @apply rounded-lg px-3 py-2 duration-300 hover:opacity-80 active:translate-x-0 active:translate-y-[5px];
}
</style>
