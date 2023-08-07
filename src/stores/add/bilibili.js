import { defineStore } from 'pinia';
import api from '@/axios/index';

const useBiliBiliStore = defineStore('useBiliBiliStore', () => {
  async function bilibiliListSaveToNotion(form) {
    try {
      const { data } = await api.post('/bilibiliList', form);

      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return {
    // async
    bilibiliListSaveToNotion,
  };
});

export default useBiliBiliStore;
