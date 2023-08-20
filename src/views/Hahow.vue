<template>
  <div class="flex min-h-[100vh] items-center justify-center">
    <form @submit.prevent="submitHandler">
      <Input
        label="notion API 頁面 ID"
        classLabel="mr-3"
        class="mb-5"
        v-model="form.mainPageId"
        :disabled="isLoading"
      ></Input>
      <Input
        label="hahow 課程網址"
        classLabel="mr-3"
        class="mb-5 ml-4"
        v-model="form.hahowUrl"
        :disabled="isLoading"
      ></Input>
      <div class="mb-10 flex items-center justify-center gap-x-3">
        <Button
          text="清除"
          class="btn bg-slate-200"
          @click="clearHandler"
          :disabled="isLoading"
        ></Button>
        <Button
          text="送出"
          class="btn bg-teal-700 text-white"
          type="submit"
          :loading="isLoading"
          :disabled="isLoading"
        ></Button>
      </div>
      <p
        v-if="result"
        class="text-center"
        :class="{ 'text-red-200': result === 2 }"
      >
        加入{{ result == 1 ? '成功' : '失敗' }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

import useSwalStore from '@/stores/plugin/swal';
import useHahowStore from '@/stores/add/hahow';

const swalStore = useSwalStore();
const { hahowSaveToNotion } = useHahowStore();

const isLoading = ref(false);
const result = ref(0);

const form = reactive({
  mainPageId: '',
  hahowUrl: '',
});

function clearHandler() {
  form.mainPageId = '';
  form.hahowUrl = '';
}

function validatorForm() {
  if (form.mainPageId === '') {
    swalStore.toastSimple('error', '請輸入 Notion API 頁面 ID');
    return false;
  }
  if (form.hahowUrl === '') {
    swalStore.toastSimple('error', '請輸入 hahow 課程網址');
    return false;
  }
  if (!form.hahowUrl.includes('https://hahow.in/courses/')) {
    swalStore.toastSimple('error', '請輸入正確的 hahow 課程網址');
    return false;
  }
  return true;
}

async function submitHandler() {
  if (!validatorForm()) return;
  result.value = 0;
  isLoading.value = true;
  const res = await hahowSaveToNotion(form);

  if (res) {
    result.value = 1;
  } else {
    result.value = 2;
  }
  isLoading.value = false;
  form.hahowUrl = '';
}
</script>
