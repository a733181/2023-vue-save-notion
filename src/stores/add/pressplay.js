import { defineStore } from 'pinia';
import api from '@/axios/index';

const usePressplayStore = defineStore('usePressplayStore', () => {
  async function pressplaySaveToNotion(form) {
    try {
      const { data } = await api.post('/pressplay', form);

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
    pressplaySaveToNotion,
  };
});

export default usePressplayStore;
