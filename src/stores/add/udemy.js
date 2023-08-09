import { defineStore } from 'pinia';
import api from '@/axios/index';
import { udemyUrl } from '@/axios/url';

const useUdemyStore = defineStore('useUdemyStore', () => {
  async function udemySaveToNotionHandler(form) {
    try {
      const { data } = await api.post(udemyUrl, form);

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
    udemySaveToNotionHandler,
  };
});

export default useUdemyStore;
