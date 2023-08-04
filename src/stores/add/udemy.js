import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/axios/index';

const useUdemyStore = defineStore('useUdemyStore', () => {
  async function udemySaveToNotionHandler(form) {
    try {
      const { data } = await api.post('/udemy', form);

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
