<template>
  <div class="flex min-h-[100vh] items-center justify-center">
    <form @submit.prevent="submitHandler">
      <Input
        label="notion API 頁面 ID"
        classLabel="mr-3"
        class="mb-5 ml-2"
        v-model="form.mainPageId"
        classInputDisabled="bg-gray-500"
        :disabled="isLoading"
      ></Input>
      <Input
        label="BiliBili 播放清單網址"
        classLabel="mr-3"
        v-model="url.list"
        classInputDisabled="bg-gray-500"
        class="mb-2"
        :disabled="isLoading || url.video !== ''"
      ></Input>
      <p class="mb-2 text-center text-gray-400">
        BiliBili 播放清單網址(需有 ?p= )
      </p>
      <Input
        label="BiliBili 播放網址"
        classLabel="mr-3 ml-8"
        v-model="url.video"
        classInputDisabled="bg-gray-500"
        class="mb-5"
        :disabled="isLoading || url.list !== ''"
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
import useBiliBiliStore from '@/stores/add/bilibili';

const swalStore = useSwalStore();
const biliBiliStore = useBiliBiliStore();
const { bilibiliListSaveToNotion, bilibiliVideoSaveToNotion } = biliBiliStore;

const isLoading = ref(false);
const result = ref(0);

const form = reactive({
  mainPageId: '',
});

const url = reactive({
  list: '',
  video: '',
});

function clearHandler() {
  form.mainPageId = '';
  url.list = '';
  url.video = '';
}

function validatorForm() {
  if (form.mainPageId === '') {
    swalStore.toastSimple('error', '請輸入 Notion API 頁面 ID');
    return false;
  }
  if (url.list === '' && url.video === '') {
    swalStore.toastSimple('error', '請輸入 BiliBili 網址');
    return false;
  }

  if (
    url.list !== '' &&
    (!url.list.includes('https://www.bilibili.com/video/') ||
      !url.list.includes('?p='))
  ) {
    swalStore.toastSimple('error', '請輸入正確的 BiliBili 播放清單網址');
    return false;
  }

  if (
    url.video !== '' &&
    !url.video.includes('https://www.bilibili.com/video/')
  ) {
    swalStore.toastSimple('error', '請輸入正確的 BiliBili 播放網址');
    return false;
  }
  return true;
}

async function submitHandler() {
  if (!validatorForm()) return;
  result.value = 0;
  isLoading.value = true;
  let res;
  if (url.list !== '') {
    res = await bilibiliListSaveToNotion({
      mainPageId: form.mainPageId,
      bilibiliUrl: url.list,
    });
  } else {
    res = await bilibiliVideoSaveToNotion({
      mainPageId: form.mainPageId,
      bilibiliUrl: url.video,
    });
  }

  if (res) {
    result.value = 1;
  } else {
    result.value = 2;
  }
  isLoading.value = false;
  url.list = '';
  url.video = '';
}
</script>
