import { defineStore } from 'pinia';
import api from '@/axios/index';

const useYoutubeStore = defineStore('useYoutubeStore', () => {
  async function youtubeListToNotionHandler(form) {
    try {
      const { data } = await api.post('/youtubelist', form);

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
      const { data } = await api.post('/youtubevideo', form);
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
