import { defineStore } from 'pinia';
import api from '@/axios/index';

const useHahowStore = defineStore('useHahowStore', () => {
  async function hahowSaveToNotion(form) {
    try {
      const { data } = await api.post('/hahow', form);

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
    hahowSaveToNotion,
  };
});

export default useHahowStore;
