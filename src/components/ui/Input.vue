<template>
  <div>
    <label v-if="props.label" :for="props.id" :class="props.classLabel"
      >{{ props.label }}
    </label>
    <input
      class="default"
      :class="classInput"
      :type="props.type"
      :placeholder="props.placeholder"
      :id="props.id"
      :name="props.name"
      :maxlength="props.max"
      :disabled="props.disabled"
      v-model.trim="proxy"
      @blur="onBlurHandler"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const emit = defineEmits(['update:modelValue', 'blur']);

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [Number, String, Boolean],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  name: {
    type: String,
  },
  max: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  classInput: {
    type: String,
  },
  classInputDisabled: {
    type: String,
  },
  classLabel: {
    type: String,
  },
});

const proxy = ref(props.modelValue);

watch(proxy, (value) => {
  emit('update:modelValue', value);
});

watch(props, (value) => {
  if (value.modelValue !== proxy.value) {
    proxy.value = value.modelValue;
  }
});

const classInput = computed(() => {
  let className = props.classInput;

  const regexpadding = /p-|pr-|pt-|pb-|pl-|px-|py-/;
  const regexborder = /border-\[#\w+\]/;
  const regexWidth = /w-/;

  if (!regexpadding.test(className)) {
    className += ' p-1';
  }
  if (!regexborder.test(className)) {
    className += ' border-gray-500';
  }
  if (!regexWidth.test(className) && !className.includes('grow')) {
    className += ' w-40';
  }

  if (props.disabled) {
    return `${className} ${props.classInputDisabled}`;
  }
  return className + ' ' + 'hover:border-gray-800';
});

function onBlurHandler(event) {
  emit('blur', event);
}
</script>

<style scoped lang="postcss">
.default {
  @apply rounded border outline-none;
}
</style>
