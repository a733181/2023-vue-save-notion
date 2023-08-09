import { defineStore } from 'pinia';
import api from '@/axios/index';
import { youtubeUrl } from '@/axios/url';

const useYoutubeStore = defineStore('useYoutubeStore', () => {
  async function youtubeListToNotionHandler(form) {
    try {
      const { data } = await api.post(youtubeUrl.list, form);

      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function youtubeVideoToNotionHandler(form) {
    try {
      const { data } = await api.post(youtubeUrl.video, form);
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
    youtubeListToNotionHandler,
    youtubeVideoToNotionHandler,
  };
});

export default useYoutubeStore;
