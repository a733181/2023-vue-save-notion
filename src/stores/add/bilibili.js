import { defineStore } from 'pinia';
import api from '@/axios/index';
import { bilibiliUrl } from '@/axios/url';

const useBiliBiliStore = defineStore('useBiliBiliStore', () => {
  async function bilibiliListSaveToNotion(form) {
    try {
      const { data } = await api.post(bilibiliUrl.list, form);

      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function bilibiliVideoSaveToNotion(form) {
    try {
      const { data } = await api.post(bilibiliUrl.video, form);

      if (data.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return {
    // async
    bilibiliListSaveToNotion,
    bilibiliVideoSaveToNotion,
  };
});

export default useBiliBiliStore;
